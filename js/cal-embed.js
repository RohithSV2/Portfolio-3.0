// Cal.com Integration & Embed Manager for Rohith S Portfolio
// Gracefully handles scheduling without showing 404 error pages when links are uninitialized

export function initCalIntegration(defaultCalLink = "rohith-s/30min") {
  let activeCalLink = localStorage.getItem("user_cal_link") || defaultCalLink;

  // Initialize official Cal snippet asynchronously
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal.ns[namespace], ["initNamespace", namespace]);
        } else {
          p(cal, ar);
        }
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  if (window.Cal) {
    window.Cal("init", { origin: "https://cal.com" });
    window.Cal("ui", {
      theme: "dark",
      styles: { branding: { brandColor: "#6366f1" } },
      hideEventTypeDetails: false,
      layout: "month_view"
    });
  }

  setupCalButtons(activeCalLink);
  renderSchedulerWidget(activeCalLink);
}

export function setupCalButtons(calLink) {
  const calButtons = document.querySelectorAll("[data-action='open-cal']");
  calButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openCalModal(calLink);
    });
  });
}

export function openCalModal(calLink) {
  const calDialog = document.getElementById("cal-modal-dialog");
  const modalBody = document.getElementById("cal-modal-dynamic-content");

  if (modalBody) {
    modalBody.innerHTML = `
      <div class="p-6 md:p-8">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold text-slate-100">Schedule Meeting with Rohith S</h3>
            <p class="text-xs text-slate-400 font-mono">Direct Connection · Google Meet / Phone / Virtual</p>
          </div>
        </div>

        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Pick your preferred meeting slot or reach out directly to coordinate a convenient time:
        </p>

        <div class="space-y-3 mb-6">
          <a href="mailto:rohithsvernekar2@gmail.com?subject=Meeting%20Request%3A%2015-Min%20Introduction&body=Hi%20Rohith%2C%0A%0AI%20would%20like%20to%20schedule%20a%20quick%2015-minute%20introductory%20chat%20with%20you.%0A%0AProposed%20Date%2FTime%3A%20%0ATopic%3A%20" class="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all group">
            <div class="flex items-center gap-3">
              <span class="text-xl">⚡</span>
              <div>
                <div class="text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">15-Min Quick Intro</div>
                <div class="text-xs text-slate-400">Coffee chat, background overview & quick inquiries</div>
              </div>
            </div>
            <span class="text-xs font-mono font-semibold text-indigo-400">Book via Email →</span>
          </a>

          <a href="mailto:rohithsvernekar2@gmail.com?subject=Meeting%20Request%3A%2030-Min%20Technical%20Interview%20%2F%20Collaboration&body=Hi%20Rohith%2C%0A%0AI%20would%20like%20to%20schedule%20a%2030-minute%20technical%20chat%20regarding%20software%20engineering%20opportunities%20%2F%20projects.%0A%0AProposed%20Date%2FTime%3A%20%0ATopic%3A%20" class="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all group">
            <div class="flex items-center gap-3">
              <span class="text-xl">💻</span>
              <div>
                <div class="text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">30-Min Technical & Internship Chat</div>
                <div class="text-xs text-slate-400">Deep-dive into AI/ML, backend architectures, or internship roles</div>
              </div>
            </div>
            <span class="text-xs font-mono font-semibold text-indigo-400">Book via Email →</span>
          </a>

          <a href="mailto:rohithsvernekar2@gmail.com?subject=Meeting%20Request%3A%2045-Min%20Project%20Collaboration&body=Hi%20Rohith%2C%0A%0AI%20would%20like%20to%20schedule%20a%2045-minute%20discussion%20regarding%20academic%20mentorship%20or%20hackathon%20collaboration.%0A%0AProposed%20Date%2FTime%3A%20%0ATopic%3A%20" class="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all group">
            <div class="flex items-center gap-3">
              <span class="text-xl">🤝</span>
              <div>
                <div class="text-sm font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">45-Min Project & Mentorship Session</div>
                <div class="text-xs text-slate-400">Collaborative engineering, hackathon strategy & student guidance</div>
              </div>
            </div>
            <span class="text-xs font-mono font-semibold text-indigo-400">Book via Email →</span>
          </a>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div class="text-xs text-slate-400 font-mono">
            Direct Phone: <a href="tel:+918660573142" class="text-emerald-400 font-bold hover:underline">+91 8660573142</a>
          </div>
          <button class="btn-secondary text-xs py-2 px-4" onclick="document.getElementById('cal-modal-dialog').close()">
            Close
          </button>
        </div>
      </div>
    `;
  }

  if (calDialog && typeof calDialog.showModal === "function") {
    calDialog.showModal();
  } else {
    window.location.href = `mailto:rohithsvernekar2@gmail.com?subject=Meeting%20Request%20with%20Rohith%20S`;
  }
}

export function renderSchedulerWidget(calLink) {
  const container = document.getElementById("cal-inline-widget");
  if (!container) return;

  // Render high-end interactive meeting hub without error-prone iframes
  container.innerHTML = `
    <div class="cal-embed-wrapper relative w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-md p-6 sm:p-8">
      
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div>
            <div class="text-lg font-bold text-slate-100 flex items-center gap-2">
              <span>Book a 1-on-1 Session</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400 status-pulse"></span>
            </div>
            <div class="text-xs text-slate-400">Available across IST / US East timezones for internships & projects</div>
          </div>
        </div>

        <a href="mailto:rohithsvernekar2@gmail.com?subject=Direct%20Meeting%20Inquiry%20for%20Rohith%20S" class="btn-primary text-xs py-2 px-4 shadow-md self-start sm:self-auto">
          <span>Instant Email Booking ✉</span>
        </a>
      </div>

      <!-- Meeting Slots Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        
        <!-- Slot 1 -->
        <div class="glass-panel p-5 border border-white/10 hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">15 MINS</span>
              <span class="text-slate-500 text-xs font-mono">Quick Intro</span>
            </div>
            <h4 class="text-base font-bold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">Virtual Coffee &amp; Intro</h4>
            <p class="text-xs text-slate-400 leading-relaxed mb-4">
              Casual discussion on engineering background, student projects, or quick alignment.
            </p>
          </div>
          <a href="mailto:rohithsvernekar2@gmail.com?subject=Meeting%20Request%3A%2015-Min%20Introduction&body=Hi%20Rohith%2C%0A%0AI%20would%20like%20to%20schedule%20a%20quick%2015-minute%20introductory%20chat%20with%20you.%0A%0AProposed%20Time%3A%20" class="text-xs font-mono font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 mt-auto">
            <span>Schedule 15 mins →</span>
          </a>
        </div>

        <!-- Slot 2 (Highlighted) -->
        <div class="glass-panel p-5 border border-indigo-500/40 bg-indigo-950/20 hover:border-indigo-400 transition-all flex flex-col justify-between group shadow-lg">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">30 MINS</span>
              <span class="text-indigo-400 text-xs font-mono font-semibold">Recommended</span>
            </div>
            <h4 class="text-base font-bold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">Technical Deep-Dive</h4>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              Discussion on AI/ML models, backend architectures, SQL normalization, or internship roles.
            </p>
          </div>
          <a href="mailto:rohithsvernekar2@gmail.com?subject=Meeting%20Request%3A%2030-Min%20Technical%20Interview&body=Hi%20Rohith%2C%0A%0AI%20would%20like%20to%20schedule%20a%2030-minute%20technical%20chat%20with%20you.%0A%0AProposed%20Time%3A%20" class="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 mt-auto">
            <span>Schedule 30 mins →</span>
          </a>
        </div>

        <!-- Slot 3 -->
        <div class="glass-panel p-5 border border-white/10 hover:border-indigo-500/50 transition-all flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-400/20">45 MINS</span>
              <span class="text-slate-500 text-xs font-mono">Collab</span>
            </div>
            <h4 class="text-base font-bold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">Collaboration &amp; Mentorship</h4>
            <p class="text-xs text-slate-400 leading-relaxed mb-4">
              Project roadmap review, hackathon planning, or academic mentorship for PUC students.
            </p>
          </div>
          <a href="mailto:rohithsvernekar2@gmail.com?subject=Meeting%20Request%3A%2045-Min%20Collaboration&body=Hi%20Rohith%2C%0A%0AI%20would%20like%20to%20schedule%20a%2045-minute%20session%20with%20you.%0A%0AProposed%20Time%3A%20" class="text-xs font-mono font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 mt-auto">
            <span>Schedule 45 mins →</span>
          </a>
        </div>

      </div>

      <!-- Footer Info -->
      <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Direct Response Guaranteed within 24 Hours</span>
        </div>
        <div class="flex items-center gap-4">
          <a href="tel:+918660573142" class="text-slate-300 hover:text-white">Call: +91 8660573142</a>
          <span>·</span>
          <a href="mailto:rohithsvernekar2@gmail.com" class="text-indigo-400 hover:underline">rohithsvernekar2@gmail.com</a>
        </div>
      </div>

    </div>
  `;
}
