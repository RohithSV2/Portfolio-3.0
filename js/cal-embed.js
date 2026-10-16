// Cal.com Integration & Embed Manager for Rohith S Portfolio
// Supports both official Cal.com popup modal, inline embedded calendar, and handle customization

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
          p(cal, ["initNamespace", namespace]);
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

  // Bind all buttons that trigger Cal Modal
  setupCalButtons(activeCalLink);
  renderInlineCal(activeCalLink);
  setupCalHandleModifier(activeCalLink);
}

export function setupCalButtons(calLink) {
  const calButtons = document.querySelectorAll("[data-action='open-cal']");
  calButtons.forEach((btn) => {
    btn.setAttribute("data-cal-link", calLink);
    btn.setAttribute("data-cal-namespace", "");
    btn.setAttribute("data-cal-config", '{"layout":"month_view","theme":"dark"}');

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openCalModal(calLink);
    });
  });
}

export function openCalModal(calLink) {
  if (window.Cal) {
    try {
      window.Cal("modal", {
        calLink: calLink,
        config: { layout: "month_view", theme: "dark" }
      });
      return;
    } catch (err) {
      console.warn("Cal modal fallback triggered:", err);
    }
  }

  // Graceful fallback to modern dialog modal with Cal iframe
  const calDialog = document.getElementById("cal-modal-dialog");
  const calFrame = document.getElementById("cal-modal-frame");
  if (calDialog && calFrame) {
    calFrame.src = `https://cal.com/${calLink}?embed=true&theme=dark`;
    if (typeof calDialog.showModal === "function") {
      calDialog.showModal();
    } else {
      window.open(`https://cal.com/${calLink}`, "_blank");
    }
  } else {
    window.open(`https://cal.com/${calLink}`, "_blank");
  }
}

export function renderInlineCal(calLink) {
  const container = document.getElementById("cal-inline-widget");
  if (!container) return;

  container.innerHTML = `
    <div class="cal-embed-wrapper relative w-full h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl backdrop-blur-md">
      <div class="cal-embed-header flex items-center justify-between px-5 py-3 border-b border-white/10 bg-slate-950/70">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </span>
          <div>
            <div class="text-xs font-semibold text-slate-200">Live Scheduling Powered by Cal.com</div>
            <div class="text-[11px] text-slate-400">cal.com/${calLink}</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <a href="https://cal.com/${calLink}" target="_blank" rel="noopener noreferrer" class="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 transition-colors px-2 py-1 rounded bg-indigo-500/10 hover:bg-indigo-500/20">
            <span>Open in New Tab</span>
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Cal iframe container with fallback instructions -->
      <iframe 
        src="https://cal.com/${calLink}?embed=true&theme=dark" 
        class="w-full h-[calc(100%-52px)] border-0" 
        title="Schedule meeting with Rohith S via Cal.com"
        loading="lazy"
      ></iframe>
    </div>
  `;
}

export function setupCalHandleModifier(currentLink) {
  const customizeBtn = document.getElementById("btn-customize-cal");
  if (!customizeBtn) return;

  customizeBtn.addEventListener("click", () => {
    const newHandle = prompt(
      "Enter your Cal.com username / event link (e.g., 'rohith-s' or 'rohith-s/30min'):",
      currentLink
    );
    if (newHandle && newHandle.trim()) {
      const cleanHandle = newHandle.trim().replace(/^https?:\/\/cal\.com\//, "");
      localStorage.setItem("user_cal_link", cleanHandle);
      setupCalButtons(cleanHandle);
      renderInlineCal(cleanHandle);
      alert(`Cal.com link updated to: cal.com/${cleanHandle}`);
    }
  });
}
