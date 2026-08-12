/*
 * Vantage Fit shared site navigation
 *
 * One source of truth for the menu IA, so a solution or feature page picks up
 * a nav change without being edited. Renders into the first [data-vf-nav]
 * element on the page.
 *
 *   <link rel="stylesheet" href="/vf-site-nav.css">
 *   <div data-vf-nav></div>
 *   <script src="/vf-site-nav.js" defer></script>
 *
 * Options, as attributes on the placeholder:
 *   data-vf-nav="/step-challenges"  mark that menu link as the current page.
 *                                   Omit to match on location.pathname.
 *   data-vf-nav-overlay             start as clear glass and thicken past the
 *                                   element named in data-vf-nav-hero.
 *   data-vf-nav-hero=".hero"        selector for the hero the overlay watches.
 *
 * The IA below is the approved menu from enterprise-final.html. Links that
 * point at www.vantagefit.io are the live site; internal prototype pages use
 * root-relative clean URLs, which Cloudflare Pages resolves from the .html.
 */
(function () {
  'use strict';

  var MENUS = [
    {
      label: 'Solutions',
      wide: true,
      columns: 2,
      groups: [
        {
          title: 'Wellness challenges &mdash; what you want to run',
          links: [
            ['https://www.vantagefit.io/solutions/wellness-challenges/', 'Wellness challenges Library', 'The full library of ready-to-run challenges'],
            ['/step-challenges', 'Step challenges', 'Company-wide step goals that get everyone moving'],
            ['https://www.vantagefit.io/solutions/multi-activity-challenges/', 'Multi-activity challenges', 'Any activity, solo or in teams, over themed weeks'],
            ['https://www.vantagefit.io/solutions/remote-team-wellness/', 'Remote &amp; hybrid team challenges', 'Wellness that works away from the office'],
            ['https://www.vantagefit.io/solutions/virtual-marathon/', 'Virtual marathon', 'Distance events powered by steps']
          ]
        },
        {
          title: 'Workforce health &amp; rewards &mdash; measure and motivate',
          links: [
            ['https://www.vantagefit.io/solutions/health-risk-assessment/', 'Health Risk Assessment', 'Baseline health screening with aggregate insights'],
            ['https://www.vantagefit.io/solutions/workforce-health-insights/', 'Workforce health insights', 'Participation, challenge and activity analytics your board can read'],
            ['https://www.vantagefit.io/solutions/wellness-rewards-program/', 'Wellness rewards program', 'Points and gift cards tied to real effort']
          ]
        }
      ]
    },
    {
      label: 'Features',
      wide: true,
      columns: 3,
      groups: [
        {
          title: 'For employees',
          links: [
            ['https://www.vantagefit.io/features/activity-and-health-tracking/', 'Activity &amp; health tracking', 'Steps, workouts, sleep and more, auto-synced'],
            ['https://www.vantagefit.io/features/nutrition-and-hydration/', 'Nutrition &amp; hydration', 'Everyday habits, gently tracked'],
            ['https://www.vantagefit.io/features/mental-wellbeing-and-mindfulness/', 'Mental wellbeing &amp; mindfulness', 'Sessions, streaks and mood check-ins'],
            ['https://www.vantagefit.io/features/personalized-programs/', 'Personalized programs', 'Plans tuned to each employee&rsquo;s goals']
          ]
        },
        {
          title: 'For HR teams',
          links: [
            ['https://www.vantagefit.io/features/participation-analytics/', 'Participation analytics &amp; insights', 'Trends, AI insights and board-ready exports in one console'],
            ['https://www.vantagefit.io/features/incentives-and-rewards/', 'Incentives &amp; rewards', 'Points, badges and a global gift-card catalogue'],
            ['https://www.vantagefit.io/features/engagement-tools/', 'Engagement tools &amp; community', 'Group chats, campaigns, streaks and certificates that keep people coming back'],
            ['https://www.vantagefit.io/features/wellness-leagues/', 'Wellness leagues', 'Segment by activity level, lift every tier']
          ]
        },
        {
          title: 'Platform',
          links: [
            ['https://www.vantagefit.io/features/integrations/', 'Integrations', 'Wearables, HRIS, SSO and more'],
            ['https://www.vantagefit.io/features/security-and-compliance/', 'Security &amp; compliance', 'HIPAA, SOC 2, GDPR, ISO 27001/27701'],
            ['https://www.vantagefit.io/features/accessibility/', 'Accessibility', 'Inclusive across devices, locations, abilities'],
            ['https://www.vantagefit.io/features/health-data-upload/', 'Health data upload', 'Turn existing health data into insight']
          ]
        }
      ]
    },
    {
      label: 'Resources',
      wide: true,
      columns: 3,
      groups: [
        {
          title: 'Content',
          links: [
            ['https://www.vantagefit.io/en/blog/', 'Blog'],
            ['https://www.vantagefit.io/casestudy/', 'Customer stories'],
            ['https://www.vantagefit.io/compare/', 'Comparisons'],
            ['https://www.vantagefit.io/reports-and-research/', 'Reports &amp; research']
          ]
        },
        {
          title: '&nbsp;',
          continued: true,
          links: [
            ['https://www.vantagefit.io/tools-and-templates/', 'Tools &amp; templates'],
            ['https://www.vantagefit.io/en/blog/podcasts/', 'Podcasts'],
            ['https://www.vantagefit.io/trust-center/', 'Trust Center <em class="vf-mega__tag">New</em>'],
            ['https://www.vantagefit.io/en/help/', 'Help Center']
          ]
        }
      ],
      feature: {
        href: 'https://www.vantagefit.io/wellness-challenges/',
        eyebrow: 'Featured',
        title: 'Wellness Challenges Library',
        body: 'Browse ready-to-run employee wellness challenges.',
        cta: 'Explore challenges'
      },
      foot: [
        ['https://www.vantagefit.io/roi-calculator/', 'ROI Calculator', 'See how wellness pays off for your headcount'],
        ['https://www.vantagefit.io/tools-and-templates/step-challenge-diy-template/', 'Step Challenge Template', 'A free, ready-to-run template']
      ]
    }
  ];

  var LANGUAGES = [
    ['https://www.vantagefit.io/', 'en', 'English'],
    ['https://www.vantagefit.io/fr/', 'fr', 'Français'],
    ['https://www.vantagefit.io/es/', 'es', 'Español'],
    ['https://www.vantagefit.io/de/', 'de', 'Deutsch']
  ];

  var CARET = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 4l4 4 4-4"/></svg>';

  function renderLink(link, current) {
    var href = link[0];
    var isCurrent = current && href === current;
    return '<a class="vf-mega__link" href="' + href + '"' +
      (isCurrent ? ' aria-current="page"' : '') + '>' + link[1] +
      (link[2] ? '<span>' + link[2] + '</span>' : '') + '</a>';
  }

  function renderMenu(menu, current) {
    var grid = '<div class="vf-mega__grid' + (menu.columns === 2 ? ' vf-mega__grid--2' : '') + '">';

    menu.groups.forEach(function (group) {
      // a continued column keeps the rule but hides the repeated label
      var title = group.continued
        ? '<div class="vf-mega__title vf-mega__title--continued" aria-hidden="true">' + group.title + '</div>'
        : '<div class="vf-mega__title">' + group.title + '</div>';
      grid += '<div>' + title +
        group.links.map(function (link) { return renderLink(link, current); }).join('') +
        '</div>';
    });

    if (menu.feature) {
      grid += '<a class="vf-mega__feature" href="' + menu.feature.href + '"><span>' +
        '<small>' + menu.feature.eyebrow + '</small>' +
        '<b>' + menu.feature.title + '</b>' +
        '<p>' + menu.feature.body + '</p></span>' +
        '<span class="vf-mega__go">' + menu.feature.cta +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>' +
        '</span></a>';
    }
    grid += '</div>';

    if (menu.foot) {
      grid += '<div class="vf-mega__foot">' + menu.foot.map(function (item) {
        return '<a href="' + item[0] + '"><b>' + item[1] + '</b><span>' + item[2] + '</span></a>';
      }).join('') + '</div>';
    }

    return '<div class="vf-nav__item">' +
      '<button class="vf-nav__trigger" type="button" aria-expanded="false">' + menu.label + CARET + '</button>' +
      '<div class="vf-mega" role="region" aria-label="' + menu.label + ' menu">' +
      '<div class="vf-mega__body">' + grid + '</div></div></div>';
  }

  function render(host, current) {
    return '<nav class="vf-nav' + (host.hasAttribute('data-vf-nav-overlay') ? ' vf-nav--overlay' : '') +
      '" aria-label="Primary navigation"><div class="vf-nav__inner">' +
      '<a class="vf-nav__brand" href="/enterprise-final" aria-label="Vantage Fit home">' +
      '<img src="/logo.png" alt="Vantage Fit" width="173" height="37" decoding="async"></a>' +
      '<button class="vf-nav__menu-btn" type="button" aria-expanded="false" aria-controls="vf-nav-links" aria-label="Open navigation">' +
      '<span class="vf-nav__menu-ico" aria-hidden="true"><i></i><i></i><i></i></span></button>' +
      '<div class="vf-nav__links" id="vf-nav-links">' +
      MENUS.map(function (menu) { return renderMenu(menu, current); }).join('') +
      '<a href="https://www.vantagefit.io/pricing/">Pricing</a>' +
      '<a class="vf-nav__cta" href="https://www.vantagefit.io/request-demo/">Book a demo</a>' +
      '<div class="vf-lang" data-vf-lang>' +
      '<button class="vf-lang__btn" type="button" aria-expanded="false" aria-controls="vf-lang-menu">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"/></svg>' +
      '<span>EN</span>' +
      '<svg class="vf-lang__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>' +
      '<span class="vf-visually-hidden">Change language, current language English</span></button>' +
      '<ul class="vf-lang__menu" id="vf-lang-menu" hidden>' +
      LANGUAGES.map(function (lang, i) {
        return '<li><a href="' + lang[0] + '" hreflang="' + lang[1] + '" lang="' + lang[1] + '"' +
          (i === 0 ? ' aria-current="true"' : '') + '>' + lang[2] + '</a></li>';
      }).join('') +
      '</ul></div></div></div></nav>';
  }

  function wire(root) {
    var menuBtn = root.querySelector('.vf-nav__menu-btn');
    var links = root.querySelector('.vf-nav__links');
    var items = [].slice.call(root.querySelectorAll('.vf-nav__item'));
    var triggers = [].slice.call(root.querySelectorAll('.vf-nav__trigger'));
    var desktop = window.matchMedia('(min-width: 861px)');
    var closeTimer;

    menuBtn.addEventListener('click', function () {
      var open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!open));
      menuBtn.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      links.classList.toggle('is-open', !open);
    });

    function closeAll(except) {
      items.forEach(function (item) {
        if (item === except) return;
        item.classList.remove('is-open');
        item.querySelector('.vf-nav__trigger').setAttribute('aria-expanded', 'false');
      });
    }

    items.forEach(function (item) {
      var trigger = item.querySelector('.vf-nav__trigger');

      item.addEventListener('pointerenter', function () {
        if (!desktop.matches) return;
        window.clearTimeout(closeTimer);
        closeAll(item);
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      });

      item.addEventListener('pointerleave', function () {
        if (!desktop.matches) return;
        closeTimer = window.setTimeout(function () {
          if (!item.matches(':hover') && !item.contains(document.activeElement)) {
            item.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
          }
        }, 120);
      });

      // Tabbing out of an open panel closes it (:focus-within used to do this).
      item.addEventListener('focusout', function () {
        if (!desktop.matches) return;
        window.setTimeout(function () {
          if (!item.contains(document.activeElement) && !item.matches(':hover')) {
            item.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
          }
        }, 0);
      });

      // Desktop used to open on hover only, so clicking a trigger did nothing:
      // bad for touch laptops, and unreachable if you expect a click.
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        var isOpen = item.classList.contains('is-open');
        window.clearTimeout(closeTimer);
        closeAll();
        if (!isOpen) {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });

    [].forEach.call(root.querySelectorAll('.vf-nav__links > a'), function (link) {
      link.addEventListener('pointerenter', function () { if (desktop.matches) closeAll(); });
    });

    // A click-opened menu needs a way out that hover never required.
    document.addEventListener('click', function (e) {
      if (!desktop.matches) return;
      if (e.target.closest('.vf-nav__item')) return;
      closeAll();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var open = items.filter(function (n) { return n.classList.contains('is-open'); })[0];
      if (!open) return;
      closeAll();
      open.querySelector('.vf-nav__trigger').focus();
    });

    // Language switcher
    var lang = root.querySelector('[data-vf-lang]');
    var langBtn = lang.querySelector('.vf-lang__btn');
    var langMenu = lang.querySelector('.vf-lang__menu');
    function closeLang() { langMenu.hidden = true; langBtn.setAttribute('aria-expanded', 'false'); }
    function openLang() { langMenu.hidden = false; langBtn.setAttribute('aria-expanded', 'true'); }
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (langBtn.getAttribute('aria-expanded') === 'true') closeLang(); else openLang();
    });
    document.addEventListener('click', function (e) { if (!lang.contains(e.target)) closeLang(); });
    lang.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeLang(); langBtn.focus(); }
    });
    langMenu.addEventListener('keydown', function (e) {
      var options = [].slice.call(langMenu.querySelectorAll('a'));
      var i = options.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); options[(i + 1) % options.length].focus(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); options[(i - 1 + options.length) % options.length].focus(); }
    });
    langBtn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); openLang(); langMenu.querySelector('a').focus(); }
    });
  }

  function init() {
    var host = document.querySelector('[data-vf-nav]');
    if (!host) return;

    // an explicit value wins; otherwise match the menu against the URL, with
    // and without the .html Pages strips off
    var current = host.getAttribute('data-vf-nav') ||
      location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || null;

    host.innerHTML = render(host, current);
    var nav = host.querySelector('.vf-nav');
    wire(nav);

    if (host.hasAttribute('data-vf-nav-overlay')) {
      var hero = document.querySelector(host.getAttribute('data-vf-nav-hero') || '.hero');
      if (hero) {
        var lit = function () {
          nav.classList.toggle('is-lit', window.scrollY > hero.offsetHeight - 90);
        };
        window.addEventListener('scroll', lit, { passive: true });
        lit();
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
