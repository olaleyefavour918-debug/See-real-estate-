/* SEE Construction & Real Estate — shared layout, navigation, favourites and helpers */
(function () {
  'use strict';
  var S = window.SEE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- icons ---------- */
  var IC = {
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
    bed: '<path d="M3 19V6"/><path d="M3 14h18v5"/><path d="M21 14v-2.5A2.5 2.5 0 0 0 18.5 9H11v5"/><circle cx="7" cy="11" r="1.6"/>',
    bath: '<path d="M4 12h16v2.5a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 14.5V12Z"/><path d="M6 12V6.5a2 2 0 0 1 3.5-1.3"/><path d="M7.5 19l-1 2M16.5 19l1 2"/>',
    area: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-3.8-3.8"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    left: '<path d="m15 6-6 6 6 6"/>',
    right: '<path d="m9 6 6 6-6 6"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    home: '<path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    land: '<path d="M2 20h20"/><path d="M3 20c2.5-6 5.5-9 9-9s6.5 3 9 9"/><path d="M12 11V3.5"/><path d="M12 4.5h5l-1.5 2 1.5 2h-5"/>',
    chart: '<path d="M3 20h18"/><path d="M6 20v-7M11 20V6M16 20v-10M21 20V9"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M16 7l3 3M14 9l2 2"/>',
    hammer: '<path d="m14 7 3-3 3 3-3 3"/><path d="m14 7-9 9a1.6 1.6 0 0 0 2.2 2.2L16 9.5"/><path d="M3 21h8"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.1 8 7.5 9.5 4.4-1.5 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
    building: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7.5h2M13 7.5h2M9 11.5h2M13 11.5h2M9 15.5h2M13 15.5h2M10.5 21v-3h3v3"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M17 14c2.5 0 4.5 2 4.5 4.5"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'
  };
  var HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.7 7.8 3.6 4.8 6.8 4.8c2 0 3.8 1.2 5.2 3.2 1.4-2 3.2-3.2 5.2-3.2 3.2 0 5.1 3 4 6.3-1.7 4.8-9.2 9.4-9.2 9.4Z"/></svg>';
  var WA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2Zm5.8 14.1c-.25.7-1.45 1.33-2 1.4-.52.07-1.17.1-1.9-.12a17 17 0 0 1-1.7-.63c-3-1.3-4.94-4.3-5.1-4.5-.14-.2-1.2-1.6-1.2-3.04 0-1.45.76-2.15 1.03-2.45.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.52.25.6.85 2.07.92 2.22.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.32.38-.45.52-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.13 1 2.08 1.32 2.38 1.47.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.82 2.02.97.3.15.5.22.57.35.07.12.07.72-.18 1.42Z"/></svg>';
  var LOGO = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11 12 3l9 8"/><path d="M5.5 10v10.5h13V10"/><path d="M9.5 20.5v-5.5h5v5.5"/></svg>';

  function icon(n, c) { return '<svg class="i ' + (c || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (IC[n] || '') + '</svg>'; }

  var FB = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#183569"/><stop offset="1" stop-color="#050f24"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><g fill="none" stroke="#c8a24a" stroke-width="3" opacity=".8"><path d="M200 400V280l200-130 200 130v120z"/><path d="M360 400V320h80v80"/><path d="M150 400h500"/></g></svg>');
  window.seeImgErr = function (img) { img.onerror = null; img.src = FB; };

  /* ---------- WhatsApp ---------- */
  function wa(msg) {
    var base = S.whatsapp ? 'https://wa.me/' + S.whatsapp : 'https://wa.me/';
    return base + '?text=' + encodeURIComponent(msg || S.waDefault);
  }
  function bindWA(root) {
    $$('[data-wa]', root).forEach(function (a) {
      var m = a.getAttribute('data-wa');
      a.href = wa(m || S.waDefault);
      a.target = '_blank';
      a.rel = 'noopener';
    });
  }

  /* ---------- formatting ---------- */
  function trim(x) { return (Math.round(x * 100) / 100).toString(); }
  function money(n) {
    if (n >= 1e9) return '₦' + trim(n / 1e9) + 'B';
    if (n >= 1e6) return '₦' + trim(n / 1e6) + 'M';
    return '₦' + n.toLocaleString('en-NG');
  }
  function priceHTML(p) {
    if (p.price == null) return '<div class="price enq">Price on enquiry</div>';
    return '<div class="price">' + money(p.price) + (p.per ? '<small>/ ' + p.per + '</small>' : '') + '</div>';
  }
  function status(p) { return p.purpose === 'Rent' ? 'For Rent' : 'For Sale'; }
  function facts(p) {
    var f = [];
    if (p.beds) f.push('<li>' + icon('bed') + p.beds + ' Beds</li>');
    if (p.baths) f.push('<li>' + icon('bath') + p.baths + ' Baths</li>');
    if (p.size) f.push('<li>' + icon('area') + p.size.toLocaleString('en-NG') + ' sqm</li>');
    if (!p.beds) f.push('<li>' + icon(p.type === 'Land' ? 'land' : 'building') + p.type + '</li>');
    return f.join('');
  }
  function byId(id) { return S.properties.filter(function (p) { return p.id === id; })[0]; }

  /* ---------- favourites (localStorage) ---------- */
  var KEY = 'see_saved_properties', mem = [];
  var Fav = {
    all: function () {
      try { var v = JSON.parse(localStorage.getItem(KEY)); return Array.isArray(v) ? v : []; } catch (e) { return mem.slice(); }
    },
    save: function (a) { mem = a.slice(); try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} },
    has: function (id) { return Fav.all().indexOf(id) > -1; },
    toggle: function (id) {
      var a = Fav.all(), i = a.indexOf(id);
      if (i > -1) a.splice(i, 1); else a.push(id);
      Fav.save(a); syncFavs();
      document.dispatchEvent(new CustomEvent('seefav', { detail: { id: id, on: i === -1 } }));
      return i === -1;
    },
    clear: function () {
      Fav.save([]); syncFavs();
      document.dispatchEvent(new CustomEvent('seefav', { detail: {} }));
    }
  };
  function syncFavs() {
    var all = Fav.all();
    $$('.fav-btn[data-id], .save-row[data-id]').forEach(function (b) {
      var on = all.indexOf(b.getAttribute('data-id')) > -1;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      var lbl = $('.lbl', b);
      if (lbl) lbl.textContent = on ? 'Saved to shortlist' : 'Save property';
      if (b.classList.contains('fav-btn')) b.setAttribute('aria-label', on ? 'Remove from saved properties' : 'Save property');
    });
    $$('.fav-count').forEach(function (c) {
      c.textContent = all.length ? all.length : '';
      c.setAttribute('data-n', all.length);
    });
  }
  function favBtn(id) {
    return '<button class="fav-btn" type="button" data-id="' + id + '" aria-pressed="false" aria-label="Save property">' + HEART + '</button>';
  }

  /* ---------- toast ---------- */
  var toastTimer;
  function toast(msg, href, label) {
    var t = $('#toast'); if (!t) return;
    t.innerHTML = icon('check') + '<span>' + msg + '</span>' + (href ? '<a href="' + href + '">' + label + '</a>' : '');
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 3400);
  }

  /* ---------- property card ---------- */
  function card(p, i) {
    var href = 'property.html?id=' + p.id;
    return '<article class="card reveal d' + ((i || 0) % 3 + 1) + '" data-id="' + p.id + '">' +
      '<a class="card-media" href="' + href + '" aria-label="View ' + p.title + '">' +
      '<img src="' + S.img(p.imgs[0], 800) + '" alt="' + p.title + ', ' + p.area + '" loading="lazy" onerror="seeImgErr(this)">' +
      '<div class="badges"><span class="badge badge-gold">' + status(p) + '</span><span class="badge badge-glass">' + p.type + '</span></div></a>' +
      favBtn(p.id) +
      '<div class="card-body"><div class="loc">' + icon('pin') + p.location + '</div>' +
      '<h3><a href="' + href + '">' + p.title + '</a></h3>' +
      '<ul class="facts">' + facts(p) + '</ul>' +
      '<div class="card-foot">' + priceHTML(p) +
      '<a class="btn btn-navy btn-sm" href="' + href + '">View details ' + icon('arrow', 'arr') + '</a></div></div></article>';
  }

  /* ---------- reveal on scroll ---------- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }) : null;
  function reveal(root) {
    $$('.reveal:not(.in)', root).forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  }
  function refresh(root) { reveal(root); bindWA(root); syncFavs(); }

  /* ---------- layout ---------- */
  function layout() {
    var page = document.body.getAttribute('data-page') || '';
    var links = [
      ['index.html', 'Home', 'home'], ['properties.html', 'Properties', 'properties'],
      ['services.html', 'Our Services', 'services'], ['about.html', 'About Us', 'about'],
      ['contact.html', 'Contact', 'contact'], ['saved.html', 'Saved Properties', 'saved']
    ];
    var nav = links.map(function (l, i) {
      return '<a href="' + l[0] + '"' + (l[2] === page ? ' class="active" aria-current="page"' : '') + '><small>0' + (i + 1) + '</small>' + l[1] +
        (l[2] === 'saved' ? '<span class="fav-count" data-n="0"></span>' : '') + '</a>';
    }).join('');

    var top =
      '<a class="sr-only" href="#main">Skip to content</a>' +
      '<div class="notice"><b>Independent Website Concept by Flowweb Ltd.</b> — Not the Official Website of SEE Construction & Real Estate.</div>' +
      '<header class="site-header' + (page === 'home' ? '' : ' solid') + '" id="siteHeader"><div class="container header-inner">' +
      '<a class="logo" href="index.html" aria-label="SEE Construction & Real Estate — home"><span class="logo-mark">' + LOGO + '</span>' +
      '<span class="logo-text"><b>SEE</b><small>Construction &amp; Real Estate</small></span></a>' +
      '<div class="header-actions">' +
      '<a class="btn btn-gold btn-sm hdr-cta" data-wa>' + '<span>Enquire now</span></a>' +
      '<a class="hdr-saved" href="saved.html" aria-label="Saved properties">' + HEART.replace('<svg', '<svg class="i" style="fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round"') + '<span class="fav-count" data-n="0"></span></a>' +
      '<button class="menu-btn" id="menuBtn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="drawer"><span class="t">Menu</span><span class="lines"><i></i><i></i></span></button>' +
      '</div></div></header>';

    var bottom =
      '<div class="backdrop" id="backdrop"></div>' +
      '<aside class="drawer" id="drawer" role="dialog" aria-modal="true" aria-label="Site menu" aria-hidden="true">' +
      '<div class="drawer-top"><a class="logo" href="index.html"><span class="logo-mark">' + LOGO + '</span><span class="logo-text"><b>SEE</b><small>Construction &amp; Real Estate</small></span></a>' +
      '<button class="drawer-close" id="drawerClose" type="button" aria-label="Close menu">' + icon('close') + '</button></div>' +
      '<nav aria-label="Main">' + nav + '</nav>' +
      '<div class="drawer-foot"><a class="btn btn-wa btn-block" data-wa><svg class="i" viewBox="0 0 24 24" style="fill:currentColor;stroke:none">' + WA.replace(/<\/?svg[^>]*>/g, '') + '</svg>Chat on WhatsApp</a>' +
      '<p>Real estate and construction across Abuja.</p></div></aside>' +

      '<footer class="site-footer"><div class="container"><div class="foot-grid">' +
      '<div class="foot-brand"><a class="logo" href="index.html"><span class="logo-mark">' + LOGO + '</span><span class="logo-text"><b>SEE</b><small>Construction &amp; Real Estate</small></span></a>' +
      '<p>Real estate and construction in Abuja — homes, land, investment opportunities and building projects, presented with clarity and care.</p>' +
      '<a class="btn btn-gold btn-sm" href="contact.html">Make an enquiry ' + icon('arrow', 'arr') + '</a></div>' +
      '<div><h5>Explore</h5><ul><li><a href="index.html">Home</a></li><li><a href="properties.html">Properties</a></li><li><a href="services.html">Our Services</a></li><li><a href="about.html">About Us</a></li><li><a href="saved.html">Saved Properties</a></li></ul></div>' +
      '<div><h5>Services</h5><ul><li><a href="services.html#sales">Property Sales</a></li><li><a href="services.html#land">Land Opportunities</a></li><li><a href="services.html#residential">Residential Property</a></li><li><a href="services.html#construction">Construction</a></li><li><a href="services.html#consultancy">Consultancy</a></li></ul></div>' +
      '<div><h5>Get in touch</h5><ul><li><a data-wa>WhatsApp us</a></li><li><a href="contact.html">Send an enquiry</a></li><li><a href="properties.html?purpose=Rent">Properties to rent</a></li><li>Abuja, Nigeria</li></ul></div>' +
      '</div><div class="foot-bottom"><span><b>Independent Website Concept by Flowweb Ltd.</b> — Not the Official Website of SEE Construction & Real Estate.</span>' +
      '<small>Property listings, prices and images shown are illustrative. © 2026 Flowweb Ltd.</small></div></div></footer>' +

      '<a class="fab" data-wa aria-label="Chat on WhatsApp">' + WA + '</a>' +
      '<div class="toast" id="toast" role="status" aria-live="polite"></div>';

    document.body.insertAdjacentHTML('afterbegin', top);
    document.body.insertAdjacentHTML('beforeend', bottom);
    $$('[data-icon]').forEach(function (el) { el.outerHTML = icon(el.getAttribute('data-icon'), el.getAttribute('data-cls') || ''); });
  }

  /* ---------- drawer ---------- */
  function drawer() {
    var btn = $('#menuBtn'), dr = $('#drawer'), bd = $('#backdrop'), cl = $('#drawerClose');
    function open() {
      dr.classList.add('open'); bd.classList.add('open');
      document.documentElement.classList.add('no-scroll');
      btn.setAttribute('aria-expanded', 'true'); dr.setAttribute('aria-hidden', 'false');
      setTimeout(function () { cl.focus(); }, 120);
    }
    function close() {
      dr.classList.remove('open'); bd.classList.remove('open');
      document.documentElement.classList.remove('no-scroll');
      btn.setAttribute('aria-expanded', 'false'); dr.setAttribute('aria-hidden', 'true');
      btn.focus({ preventScroll: true });
    }
    btn.addEventListener('click', open);
    cl.addEventListener('click', close);
    bd.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dr.classList.contains('open')) close();
      if (e.key === 'Tab' && dr.classList.contains('open')) {
        var f = $$('a[href],button', dr); if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    $$('a', dr).forEach(function (a) { a.addEventListener('click', function () { if (a.getAttribute('href') && a.getAttribute('href').charAt(0) === '#') close(); }); });
  }

  /* ---------- header scroll ---------- */
  function headerScroll() {
    var h = $('#siteHeader');
    if (document.body.getAttribute('data-page') !== 'home') return;
    var f = function () { h.classList.toggle('solid', window.scrollY > 50); };
    f(); window.addEventListener('scroll', f, { passive: true });
  }

  /* ---------- global click: favourites ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.fav-btn, .save-row');
    if (!b) return;
    e.preventDefault();
    var id = b.getAttribute('data-id');
    var on = Fav.toggle(id);
    b.classList.remove('pop'); void b.offsetWidth; if (b.classList.contains('fav-btn')) b.classList.add('pop');
    if (on) toast('Saved to your shortlist', 'saved.html', 'View saved'); else toast('Removed from saved');
  });

  /* ---------- boot ---------- */
  layout();
  drawer();
  headerScroll();
  refresh(document);

  window.SEEApp = {
    S: S, $: $, $$: $$, icon: icon, card: card, byId: byId, Fav: Fav, wa: wa, money: money, priceHTML: priceHTML,
    status: status, favBtn: favBtn, facts: facts, refresh: refresh, reveal: reveal, toast: toast, bindWA: bindWA, syncFavs: syncFavs, WA: WA
  };
})();
