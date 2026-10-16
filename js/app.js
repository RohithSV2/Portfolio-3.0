// Main Interactive Application Logic for Rohith S Portfolio
import { portfolioData } from './data.js';
import { initCalIntegration, openCalModal } from './cal-embed.js';

document.addEventListener('DOMContentLoaded', () => {
  setupMouseGlow();
  setupThemeToggle();
  setupTypingTerminal();
  renderHeroStats();
  renderSkills();
  renderProjects('All');
  renderCertificates('All');
  renderEducationAndVolunteering();
  setupModals();
  setupCommandPalette();
  setupContactForm();
  initCalIntegration(portfolioData.personal.calLink);
});

/* --------------------------------------------------------------------------
   1. Dynamic Mouse Cursor Glow & Card Spotlight (Brittany Chiang / Dale Larroder aesthetic)
   -------------------------------------------------------------------------- */
function setupMouseGlow() {
  window.addEventListener('mousemove', (e) => {
    const x = `${(e.clientX / window.innerWidth) * 100}%`;
    const y = `${(e.clientY / window.innerHeight) * 100}%`;
    document.body.style.setProperty('--mouse-x', x);
    document.body.style.setProperty('--mouse-y', y);
  });

  const cards = document.querySelectorAll('.spotlight-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--card-x', `${x}px`);
      card.style.setProperty('--card-y', `${y}px`);
    });
  });
}

/* --------------------------------------------------------------------------
   2. Interactive Typing Developer Terminal (from Rohith's portfolio)
   -------------------------------------------------------------------------- */
function setupTypingTerminal() {
  const term = document.getElementById('typed-terminal');
  if (!term) return;

  const lines = [
    { p: '$ ', t: 'whoami', out: false },
    { p: '', t: 'Rohith S — ISE undergrad, NIE Mysuru', out: true },
    { p: '$ ', t: 'cat focus.txt', out: false },
    { p: '', t: 'AI/ML · Backend Systems · Cybersecurity · Android', out: true },
    { p: '$ ', t: 'ls projects/', out: false },
    { p: '', t: 'agri-chatbot  delivery-cnn-lstm  hostel-app  textile-crud  seo-auditor', out: true },
    { p: '$ ', t: 'ls credentials/', out: false },
    { p: '', t: '11 Verified Certifications (Cyberverse CCSA, Coursera, NIE Algorithms)', out: true },
    { p: '$ ', t: './status.sh', out: false },
    { p: '', t: 'building. learning. shipping.', out: true },
  ];

  term.innerHTML = '';
  let li = 0, ci = 0;

  function typeLine() {
    if (li >= lines.length) {
      const cursor = document.createElement('span');
      cursor.className = 'cursor inline-block w-2 h-4 bg-amber-400 ml-1 align-middle animate-pulse';
      term.appendChild(cursor);
      return;
    }

    const line = lines[li];
    const row = document.createElement('div');
    row.className = 'mb-2 font-mono text-xs sm:text-[13px]';

    const promptSpan = document.createElement('span');
    promptSpan.className = 'text-cyan-400 font-bold';
    promptSpan.textContent = line.p;

    const textSpan = document.createElement('span');
    textSpan.className = line.out ? 'text-slate-200' : 'text-amber-300';

    row.appendChild(promptSpan);
    row.appendChild(textSpan);
    term.appendChild(row);

    ci = 0;
    const speed = line.out ? 14 : 35;

    (function typeChar() {
      if (ci < line.t.length) {
        textSpan.textContent += line.t.charAt(ci);
        ci++;
        setTimeout(typeChar, speed);
      } else {
        li++;
        setTimeout(typeLine, line.out ? 280 : 160);
      }
    })();
  }

  setTimeout(typeLine, 400);
}

/* --------------------------------------------------------------------------
   3. Theme Toggle (Dark / Light)
   -------------------------------------------------------------------------- */
function setupThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('portfolio_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('portfolio_theme', next);
      updateThemeIcon(next);
      showToast(`Switched to ${next} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const iconSlot = document.getElementById('theme-toggle-icon');
  if (!iconSlot) return;
  if (theme === 'dark') {
    iconSlot.innerHTML = `
      <svg class="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    `;
  } else {
    iconSlot.innerHTML = `
      <svg class="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    `;
  }
}

/* --------------------------------------------------------------------------
   4. Hero Stats
   -------------------------------------------------------------------------- */
function renderHeroStats() {
  const statsContainer = document.getElementById('hero-stats-container');
  if (!statsContainer) return;

  statsContainer.innerHTML = portfolioData.personal.stats.map(s => `
    <div class="glass-panel p-4 text-center border border-white/10 hover:border-indigo-500/40 transition-all">
      <div class="text-2xl md:text-3xl font-black font-mono gradient-text-indigo">${s.value}</div>
      <div class="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">${s.label}</div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   5. Skills Matrix (Comprehensive from old portfolio & resume)
   -------------------------------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById('skills-grid-container');
  if (!container) return;

  const { languages, dsa, web, aiData, databases, tools, coreCS } = portfolioData.skills;

  const renderSection = (title, items, iconColor, subtitle = "") => `
    <div class="glass-panel p-6 border border-white/10 hover:border-indigo-500/40 transition-all">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-base font-bold text-slate-100 flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full ${iconColor}"></span>
          ${title}
        </h3>
        <span class="text-[11px] font-mono text-slate-400">${items.length} items</span>
      </div>
      ${subtitle ? `<p class="text-xs text-slate-400 mb-3">${subtitle}</p>` : ''}
      <div class="flex flex-wrap gap-2 mt-3">
        ${items.map(item => `
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/60 hover:border-indigo-400 transition-colors">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            ${item.name}
            ${item.level ? `<span class="text-[10px] text-slate-400 font-mono ml-1 opacity-70">(${item.level})</span>` : ''}
          </span>
        `).join('')}
      </div>
    </div>
  `;

  container.innerHTML = `
    ${renderSection('Languages', languages, 'bg-cyan-400', 'Core programming languages with object-oriented & systems proficiency')}
    ${renderSection('Data Structures & Algorithms', dsa, 'bg-amber-400', 'Algorithmic efficiency, graph theory, trees, and dynamic programming')}
    ${renderSection('Web Development & REST APIs', web, 'bg-indigo-400', 'Full-stack web applications, Flask backends, and responsive interfaces')}
    ${renderSection('Machine Learning & Applied AI', aiData, 'bg-rose-400', 'Deep learning CNN-LSTM models, NLP query processing, and data science')}
    ${renderSection('Databases & Relational Modeling', databases, 'bg-emerald-400', 'Normalized 3NF schemas, complex SQL joins, and Android SQLite')}
    ${renderSection('Tools & Engineering Platforms', tools, 'bg-blue-400', 'IDEs, Git workflows, Android Studio, Jupyter, and API testing')}
    ${renderSection('Core CS Foundations', coreCS, 'bg-purple-400', 'Operating systems, computer networks, OOP paradigms, and cybersecurity')}
  `;
}

/* --------------------------------------------------------------------------
   6. Projects Showcase with Filter Tabs & Architecture Modals
   -------------------------------------------------------------------------- */
export function renderProjects(filter = 'All') {
  const container = document.getElementById('projects-grid-container');
  const tabsContainer = document.getElementById('project-filter-tabs');
  if (!container) return;

  const categories = ['All', 'AI & Machine Learning', 'Full-Stack & Web', 'Mobile Apps', 'Developer Tools'];

  if (tabsContainer) {
    tabsContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === filter ? 'active' : ''}" data-cat="${cat}">
        ${cat}
      </button>
    `).join('');

    tabsContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        renderProjects(cat);
      });
    });
  }

  const filtered = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <div class="glass-panel spotlight-card flex flex-col justify-between overflow-hidden border border-white/10 hover:border-indigo-500/50 group transition-all duration-300">
      <div>
        <!-- Project Preview Image -->
        <div class="relative w-full h-48 bg-slate-950/70 overflow-hidden border-b border-white/10">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 backdrop-blur-md">
            ${p.badge}
          </div>
        </div>

        <div class="p-6">
          <div class="text-xs font-mono font-semibold text-indigo-400 mb-1 uppercase tracking-wider">${p.category}</div>
          <h3 class="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors mb-2">${p.title}</h3>
          <p class="text-sm text-slate-300 line-clamp-3 mb-4 leading-relaxed">${p.description}</p>
          
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${p.tech.map(t => `
              <span class="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-auto">
        <button class="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors py-2 px-3 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20" data-action="inspect-project" data-id="${p.id}">
          <span>Architecture & Details</span>
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>

        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5" title="View Source on GitHub">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
          </svg>
        </a>
      </div>
    </div>
  `).join('');

  setupMouseGlow();
  bindProjectInspectButtons();
}

function bindProjectInspectButtons() {
  document.querySelectorAll("[data-action='inspect-project']").forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const project = portfolioData.projects.find(p => p.id === id);
      if (project) openProjectModal(project);
    });
  });
}

function openProjectModal(p) {
  const modal = document.getElementById('project-detail-dialog');
  const body = document.getElementById('project-modal-content');
  if (!modal || !body) return;

  body.innerHTML = `
    <div class="relative">
      <div class="h-64 w-full bg-slate-950 overflow-hidden border-b border-white/10">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover" />
      </div>

      <div class="p-6 md:p-8">
        <div class="flex items-center justify-between gap-4 mb-2">
          <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
            ${p.category}
          </span>
          <span class="text-xs text-slate-400 font-mono">${p.badge}</span>
        </div>

        <h2 class="text-2xl font-black text-slate-100 mb-3">${p.title}</h2>
        <p class="text-sm md:text-base text-slate-300 leading-relaxed mb-6">${p.description}</p>

        <h4 class="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">Key Technical Highlights & System Design</h4>
        <ul class="space-y-2 mb-6">
          ${p.highlights.map(h => `
            <li class="flex items-start gap-2.5 text-sm text-slate-300">
              <span class="text-emerald-400 font-bold mt-0.5">✓</span>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>

        <h4 class="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">Technologies & Architecture</h4>
        <div class="flex flex-wrap gap-2 mb-8">
          ${p.tech.map(t => `
            <span class="px-3 py-1 text-xs font-mono rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
              ${t}
            </span>
          `).join('')}
        </div>

        <div class="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
          <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-primary">
            <span>View Source on GitHub</span>
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <button class="btn-secondary" onclick="document.getElementById('project-detail-dialog').close()">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  modal.showModal();
}

/* --------------------------------------------------------------------------
   7. Certifications Showcase (ALL 11 VERIFIED CREDENTIALS from d:\Certificates & old portfolio)
   -------------------------------------------------------------------------- */
export function renderCertificates(filter = 'All') {
  const container = document.getElementById('certificates-grid-container');
  const tabsContainer = document.getElementById('cert-filter-tabs');
  if (!container) return;

  const categories = ['All', 'Cybersecurity', 'Programming', 'Data Science & AI', 'Academic & Algorithms', 'Hackathons'];

  if (tabsContainer) {
    tabsContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === filter ? 'active' : ''}" data-cat="${cat}">
        ${cat}
      </button>
    `).join('');

    tabsContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-cat');
        renderCertificates(cat);
      });
    });
  }

  const filtered = filter === 'All' 
    ? portfolioData.certificates 
    : portfolioData.certificates.filter(c => c.issuerCategory === filter);

  container.innerHTML = filtered.map(c => `
    <div class="glass-panel spotlight-card flex flex-col justify-between p-6 border border-white/10 hover:border-indigo-500/50 group transition-all">
      <div>
        <!-- Certificate Header -->
        <div class="flex items-start justify-between gap-4 mb-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <div>
              <div class="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1">
                <span>✓ ${c.date}</span>
              </div>
              <div class="text-xs text-slate-400">${c.issuer}</div>
            </div>
          </div>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
            ${c.issuerCategory}
          </span>
        </div>

        <!-- Title -->
        <h3 class="text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition-colors mb-2">${c.title}</h3>
        <p class="text-xs text-slate-300 mb-4 leading-relaxed line-clamp-3">${c.summary}</p>

        <!-- Skills Verified -->
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${c.skills.map(s => `
            <span class="px-2 py-0.5 text-[10px] font-mono rounded bg-indigo-950/40 text-indigo-200 border border-indigo-800/40">
              ${s}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Footer & Action Buttons -->
      <div class="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 mt-auto">
        <button class="btn-copy-id text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors py-1.5 px-2.5 rounded bg-slate-800/60 hover:bg-slate-800" data-id="${c.credentialId}">
          <span>ID: ${c.credentialId}</span>
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>

        <div class="flex items-center gap-1.5">
          <button class="btn-inspect-cert text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors py-1.5 px-3 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20" data-id="${c.id}">
            <span>Inspect</span>
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>

          ${c.fileUrl ? `
            <a href="${c.fileUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors py-1.5 px-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20" title="Open original document / verify link">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');

  setupMouseGlow();
  bindCertificateButtons();
}

function bindCertificateButtons() {
  document.querySelectorAll('.btn-copy-id').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      navigator.clipboard.writeText(id).then(() => {
        showToast(`Copied Credential ID: ${id}`);
      });
    });
  });

  document.querySelectorAll('.btn-inspect-cert').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const cert = portfolioData.certificates.find(c => c.id === id);
      if (cert) openCertificateModal(cert);
    });
  });
}

function openCertificateModal(c) {
  const modal = document.getElementById('cert-detail-dialog');
  const body = document.getElementById('cert-modal-content');
  if (!modal || !body) return;

  const isImage = c.fileUrl && (c.fileUrl.endsWith('.jpeg') || c.fileUrl.endsWith('.jpg') || c.fileUrl.endsWith('.png') || c.fileUrl.endsWith('.svg'));
  const isPdf = c.fileUrl && c.fileUrl.endsWith('.pdf');

  body.innerHTML = `
    <div class="relative">
      <div class="w-full bg-slate-950 p-4 border-b border-white/10 flex items-center justify-center min-h-[220px]">
        ${isImage ? `
          <img src="${c.fileUrl}" alt="${c.title}" class="max-h-[380px] w-auto rounded-lg shadow-2xl border border-white/10" />
        ` : isPdf ? `
          <div class="w-full h-80 bg-slate-900 rounded-lg overflow-hidden border border-white/10 flex flex-col items-center justify-center p-6 text-center">
            <svg class="w-16 h-16 text-indigo-400 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <h4 class="text-base font-bold text-slate-100 mb-1">${c.title}</h4>
            <p class="text-xs text-slate-400 mb-4">Official PDF Document on file: ${c.fileUrl.split('/').pop()}</p>
            <a href="${c.fileUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-2 px-4">
              <span>View &amp; Download Original PDF</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        ` : `
          <img src="${c.image}" alt="${c.title}" class="max-h-[340px] w-auto rounded-lg shadow-xl" />
        `}
      </div>

      <div class="p-6 md:p-8">
        <div class="flex items-center justify-between gap-4 mb-2">
          <span class="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            ✓ ${c.date}
          </span>
          <span class="text-xs text-slate-400 font-mono">Issuer: ${c.issuer}</span>
        </div>

        <h2 class="text-2xl font-black text-slate-100 mb-1">${c.title}</h2>
        <div class="text-xs font-mono text-indigo-400 mb-4">Credential ID: ${c.credentialId}</div>

        <p class="text-sm text-slate-300 leading-relaxed mb-6">${c.summary}</p>

        <h4 class="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">Skills Validated by Authority</h4>
        <div class="flex flex-wrap gap-2 mb-8">
          ${c.skills.map(s => `
            <span class="px-3 py-1 text-xs font-mono rounded-lg bg-indigo-950/50 text-indigo-200 border border-indigo-700/50">
              ${s}
            </span>
          `).join('')}
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div class="flex items-center gap-2">
            <button class="btn-primary text-xs py-2 px-3" onclick="navigator.clipboard.writeText('${c.credentialId}').then(() => alert('Credential ID copied: ${c.credentialId}'))">
              <span>Copy ID: ${c.credentialId}</span>
            </button>
            ${c.verificationLink ? `
              <a href="${c.verificationLink}" target="_blank" rel="noopener noreferrer" class="btn-secondary text-xs py-2 px-3">
                <span>Verify Credential ↗</span>
              </a>
            ` : ''}
          </div>

          <button class="btn-secondary text-xs py-2 px-4" onclick="document.getElementById('cert-detail-dialog').close()">
            Close
          </button>
        </div>
      </div>
    </div>
  `;

  modal.showModal();
}

/* --------------------------------------------------------------------------
   8. Education, Achievements & Volunteering Timeline
   -------------------------------------------------------------------------- */
function renderEducationAndVolunteering() {
  const eduContainer = document.getElementById('education-timeline-container');
  const achContainer = document.getElementById('achievements-container');
  const volContainer = document.getElementById('volunteering-container');

  if (eduContainer) {
    eduContainer.innerHTML = portfolioData.education.map(e => `
      <div class="relative pl-6 pb-8 border-l border-indigo-500/30 last:border-0 last:pb-0">
        <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full ${e.current ? 'bg-emerald-400 ring-4 ring-emerald-500/20' : 'bg-indigo-400'}"></div>
        <div class="text-xs font-mono font-semibold text-indigo-400 mb-1">${e.period} · ${e.type}</div>
        <h4 class="text-base font-bold text-slate-100">${e.institution}</h4>
        <div class="text-sm text-slate-300 font-medium">${e.degree}</div>
        ${e.score ? `<div class="text-xs font-mono font-bold text-emerald-400 mt-1">Score: ${e.score}</div>` : ''}
        ${e.affiliation ? `<div class="text-xs text-slate-400 mt-0.5">${e.affiliation}</div>` : ''}
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">${e.details}</p>
      </div>
    `).join('');
  }

  if (achContainer) {
    achContainer.innerHTML = portfolioData.achievements.map(a => `
      <div class="glass-panel p-5 border border-white/10 hover:border-indigo-500/40">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2 py-0.5 text-[10px] font-mono rounded bg-amber-500/20 text-amber-300 border border-amber-400/30">
            ${a.type}
          </span>
          <span class="text-xs text-slate-400">${a.organization}</span>
        </div>
        <h4 class="text-sm font-bold text-slate-100 mb-2">${a.title}</h4>
        <p class="text-xs text-slate-300 leading-relaxed mb-3">${a.description}</p>
        <a href="assets/certificates/Rohith S.pdf" target="_blank" rel="noopener noreferrer" class="text-xs font-mono text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
          <span>View Hackathon Certificate PDF ↗</span>
        </a>
      </div>
    `).join('');
  }

  if (volContainer) {
    volContainer.innerHTML = portfolioData.volunteering.map(v => `
      <div class="glass-panel p-5 border border-white/10 hover:border-indigo-500/40">
        <div class="flex items-center justify-between gap-2 mb-2">
          <h4 class="text-sm font-bold text-slate-100">${v.role}</h4>
          <span class="text-xs font-mono text-indigo-400">${v.period}</span>
        </div>
        <div class="text-xs text-slate-400 mb-3">${v.organization}</div>
        <p class="text-xs text-slate-300 leading-relaxed">${v.description}</p>
      </div>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   9. Modals & Native Dialog Controls
   -------------------------------------------------------------------------- */
function setupModals() {
  document.querySelectorAll('dialog').forEach(dlg => {
    dlg.addEventListener('click', (e) => {
      const rect = dlg.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        dlg.close();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   10. Command Palette (Cmd+K / Ctrl+K)
   -------------------------------------------------------------------------- */
function setupCommandPalette() {
  const palette = document.getElementById('cmd-palette-dialog');
  const triggerBtn = document.getElementById('cmd-palette-trigger');
  const searchInput = document.getElementById('cmd-search-input');
  const resultsContainer = document.getElementById('cmd-search-results');

  if (!palette) return;

  const openPalette = () => {
    palette.showModal();
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
      renderPaletteResults('');
    }
  };

  if (triggerBtn) {
    triggerBtn.addEventListener('click', openPalette);
  }

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (palette.open) palette.close();
      else openPalette();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderPaletteResults(e.target.value.toLowerCase());
    });
  }

  function renderPaletteResults(query) {
    if (!resultsContainer) return;

    const certActions = portfolioData.certificates.map(c => ({
      name: `${c.title} — ${c.issuer}`,
      category: "Certificate",
      icon: "award",
      handler: () => { palette.close(); openCertificateModal(c); }
    }));

    const projectActions = portfolioData.projects.map(p => ({
      name: `Inspect ${p.title}`,
      category: "Project",
      icon: "box",
      handler: () => { palette.close(); openProjectModal(p); }
    }));

    const baseActions = [
      { name: "Schedule Call via Cal.com", category: "Action", icon: "calendar", handler: () => { palette.close(); openCalModal(portfolioData.personal.calLink); } },
      { name: "Copy Email: rohithsvernekar2@gmail.com", category: "Contact", icon: "mail", handler: () => { palette.close(); navigator.clipboard.writeText(portfolioData.personal.email); showToast("Email copied to clipboard!"); } },
      { name: "Copy Phone: +91 8660573142", category: "Contact", icon: "phone", handler: () => { palette.close(); navigator.clipboard.writeText(portfolioData.personal.phone); showToast("Phone copied to clipboard!"); } },
      { name: "Toggle Theme (Light / Dark)", category: "Setting", icon: "sun", handler: () => { palette.close(); document.getElementById('theme-toggle-btn')?.click(); } }
    ];

    const allActions = [...baseActions, ...projectActions, ...certActions];

    const filtered = query
      ? allActions.filter(a => a.name.toLowerCase().includes(query) || a.category.toLowerCase().includes(query))
      : allActions;

    resultsContainer.innerHTML = filtered.map((item, idx) => `
      <div class="cmd-item flex items-center justify-between p-3 rounded-lg hover:bg-indigo-600/20 cursor-pointer transition-colors border border-transparent hover:border-indigo-500/30" data-idx="${idx}">
        <div class="flex items-center gap-3">
          <span class="text-indigo-400 font-mono text-xs px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
            ${item.category}
          </span>
          <span class="text-sm font-medium text-slate-200">${item.name}</span>
        </div>
        <span class="text-xs text-slate-500 font-mono">↵ Jump</span>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.cmd-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-idx'));
        if (filtered[idx]) filtered[idx].handler();
      });
    });
  }
}

/* --------------------------------------------------------------------------
   11. Contact Form with :user-invalid and Mailto fallback
   -------------------------------------------------------------------------- */
function setupContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name']?.value || '';
    const email = form.elements['email']?.value || '';
    const message = form.elements['message']?.value || '';

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const bodyText = encodeURIComponent(`Hi Rohith,\n\n${message}\n\nFrom: ${name} (${email})`);
    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${bodyText}`;

    showToast("Launching your email client...");
    window.location.href = mailtoUrl;
    form.reset();
  });

  document.querySelectorAll('[data-copy-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-copy-action');
      if (type === 'email') {
        navigator.clipboard.writeText(portfolioData.personal.email).then(() => {
          showToast(`Copied: ${portfolioData.personal.email}`);
        });
      } else if (type === 'phone') {
        navigator.clipboard.writeText(portfolioData.personal.phone).then(() => {
          showToast(`Copied: ${portfolioData.personal.phone}`);
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   12. Toast System
   -------------------------------------------------------------------------- */
export function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="text-indigo-400 font-bold">●</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
