// ===========================
// WordPress Learning — Main JS
// ===========================

(function() {
  'use strict';

  // --- Mobile sidebar toggle & language preference ---
  document.addEventListener('DOMContentLoaded', function() {
    // Store language preference when clicking the language switcher.
    // The root index.html reads localStorage to redirect returning visitors.
    var langLinks = document.querySelectorAll('.lang-switcher a');
    langLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        var href = link.getAttribute('href') || '';
        if (href.indexOf('/es/') !== -1) {
          localStorage.setItem('wp-learn-lang', 'es');
        } else if (href.indexOf('/en/') !== -1) {
          localStorage.setItem('wp-learn-lang', 'en');
        }
      });
    });
    var hamburger = document.querySelector('.hamburger');
    var sidebar = document.querySelector('.sidebar');
    var overlay = document.querySelector('.sidebar-overlay');

    if (hamburger && sidebar) {
      hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('open');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      });
    }

    // Scroll active sidebar item into view
    var activeItem = document.querySelector('.sidebar li.active');
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'center', behavior: 'instant' });
    }
  });
})();
