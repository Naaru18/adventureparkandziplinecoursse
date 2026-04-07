
function loadFooter() {
  fetch("../components/footer.html")
    .then(res => res.text())
    .then(data => {
      const foot = document.getElementById("footer");

      if (foot) {
        foot.innerHTML = data;
      }
    })
    .catch(err => console.error("Footer Load Error:", err));
}


document.addEventListener("DOMContentLoaded", loadFooter);

(function () {
  'use strict';

  /* ════════════════════════════════════════════
     LOAD HEADER INTO ALL PAGES
  ════════════════════════════════════════════ */
  document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("header");

    if (header) {
      fetch("../components/navbar.html")   // ✅ correct path (adjust if needed)
        .then(res => res.text())
        .then(data => {
          header.innerHTML = data;


          initHeader();
        })
        .catch(err => console.error("Header load error:", err));
    }

  });

  /* ════════════════════════════════════════════
     HEADER FUNCTIONALITY
  ════════════════════════════════════════════ */
  function initHeader() {

    const html     = document.documentElement;
    const themeBtn = document.getElementById('ezThemeBtn');
    const menuBtn  = document.getElementById('ezMenuBtn');
    const drawer   = document.getElementById('ezDrawer');
    const overlay  = document.getElementById('ezOverlay');
    const bpChip   = document.getElementById('ezBpChip');
    const rtlBtn = document.getElementById("rtlToggle");

   


function initTheme() {
  const saved = localStorage.getItem('theme');

  if (saved === 'dark') {
    document.body.classList.add('dark');
    if (themeBtn) themeBtn.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    if (themeBtn) themeBtn.textContent = '🌙';
  }
}

initTheme();


if (themeBtn) {
  themeBtn.addEventListener('click', function () {

    document.body.classList.toggle('dark');

    const isDark = document.body.classList.contains('dark');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');


    themeBtn.textContent = isDark ? '☀️' : '🌙';
  });
}
    
    function openDrawer() {
      if (!menuBtn || !drawer || !overlay) return;

      menuBtn.classList.add('open');
      drawer.classList.add('open');
      overlay.style.display = 'block';

      requestAnimationFrame(() => overlay.classList.add('open'));

      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (!menuBtn || !drawer || !overlay) return;

      menuBtn.classList.remove('open');
      drawer.classList.remove('open');
      overlay.classList.remove('open');

      overlay.addEventListener('transitionend', function handler() {
        overlay.style.display = 'none';
        overlay.removeEventListener('transitionend', handler);
      });

      document.body.style.overflow = '';
    }

    if (menuBtn) {
      menuBtn.addEventListener('click', function () {
        menuBtn.classList.contains('open') ? closeDrawer() : openDrawer();
      });
    }

    if (overlay) {
      overlay.addEventListener('click', closeDrawer);
    }

    
    document.querySelectorAll('.ez-mob-has-sub').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetId = btn.getAttribute('data-target');
        const sub = document.getElementById(targetId);
        if (!sub) return;

        const isOpen = sub.classList.contains('open');

        document.querySelectorAll('.ez-mob-sub.open').forEach(function (el) {
          if (el !== sub) {
            el.classList.remove('open');
          }
        });

        sub.classList.toggle('open', !isOpen);
        btn.classList.toggle('open-sub', !isOpen);
      });
    });

    
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1024) {
        closeDrawer();

        document.querySelectorAll('.ez-mob-sub.open').forEach(function (sub) {
          sub.classList.remove('open');
        });
      }

      updateBpChip();
    });

    
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeDrawer();
      }
    });
  

    rtlBtn.addEventListener("click", () => {
      document.body.classList.toggle("rtl");
    });
    
    function updateBpChip() {
      if (!bpChip) return;

      const w = window.innerWidth;

      if (w < 640) {
        bpChip.textContent = '📱 Mobile — ' + w + 'px';
      } else if (w < 1024) {
        bpChip.textContent = '📟 Tablet — ' + w + 'px';
      } else if (w < 1280) {
        bpChip.textContent = '🖥 Desktop — ' + w + 'px';
      } else {
        bpChip.textContent = '🖵 Large — ' + w + 'px';
      }
    }

    updateBpChip();

    
    (function highlightActive() {
      const currentPath = window.location.pathname;

      document.querySelectorAll('.ez-link').forEach(function (link) {
        const href = link.getAttribute('href');

        if (href && currentPath.endsWith(href.replace(/^\.\./, ''))) {
          link.classList.add('active');
        }
      });
    })();

  }

})();












