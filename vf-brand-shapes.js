/*
 * Vantage Fit ambient brand shapes — entrance driver
 *
 * Ported from enterprise-final.html. Adds .vf-anim to the root so the hidden
 * state in vfit-design-system.css takes effect, then adds .is-in to each shape
 * as its section arrives. Without this script the shapes simply render in
 * place, which is the point of gating the hidden state on .vf-anim.
 *
 *   <script src="/vf-brand-shapes.js" defer></script>
 */
(function () {
  'use strict';

  function init() {
    var shapes = [].slice.call(document.querySelectorAll('.vf-brand-shape'));
    if (!shapes.length) return;

    var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.add('vf-anim');

    var showAll = function () {
      shapes.forEach(function (s) { s.classList.add('is-in'); });
    };
    if (still || !('IntersectionObserver' in window)) return showAll();

    /* Observe the host section, not the shape. The right-hand shapes sit mostly
       outside a phone viewport and the hidden state scales them smaller still,
       so watching the shape itself can leave it stuck hidden. */
    var hosts = new Map();
    shapes.forEach(function (s) {
      var host = s.closest('.vf-brand-field') || s.closest('section') || s.parentElement;
      if (!hosts.has(host)) hosts.set(host, []);
      hosts.get(host).push(s);
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        (hosts.get(e.target) || []).forEach(function (s) { s.classList.add('is-in'); });
        io.unobserve(e.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -28% 0px' });

    hosts.forEach(function (_, host) { io.observe(host); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
