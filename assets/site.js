/* lethimcook cars — loader, scroll reveal, stat counters. No libraries. */
(function () {
  'use strict';
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- loading screen: fade as soon as content is ready, hard fallback --- */
  var loader = document.getElementById('loader');
  var hidden = false;
  function hideLoader() {
    if (hidden || !loader) return;
    hidden = true;
    loader.classList.add('done');
    setTimeout(function () { if (loader && loader.parentNode) loader.parentNode.removeChild(loader); }, 600);
  }
  if (document.readyState === 'complete') { setTimeout(hideLoader, 250); }
  document.addEventListener('DOMContentLoaded', function () { setTimeout(hideLoader, 350); });
  window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, 2500); /* never blocks longer than ~2.5s */

  /* --- scroll reveal --- */
  var revealIO = null;
  if (!reduced && 'IntersectionObserver' in window) {
    revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -4% 0px' });
  }
  function reveal(el) {
    if (revealIO) { revealIO.observe(el); } else { el.classList.add('in'); }
  }
  Array.prototype.slice.call(document.querySelectorAll('.reveal')).forEach(reveal);
  /* elements added later (the home grid renders from cars-data.js) */
  window.__revealNew = function (els) { els.forEach(reveal); };

  /* --- animated counters (elements with data-count) --- */
  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
  function runCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    if (reduced) { el.textContent = el.getAttribute('data-final') || String(target); return; }
    var finalText = el.getAttribute('data-final') || String(target);
    var dur = 900, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1) { requestAnimationFrame(step); } else { el.textContent = finalText; }
    }
    requestAnimationFrame(step);
  }
  if (counters.length) {
    if (!('IntersectionObserver' in window)) { counters.forEach(runCounter); }
    else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { runCounter(e.target); cio.unobserve(e.target); } });
      }, { threshold: 0.4 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  }
})();
