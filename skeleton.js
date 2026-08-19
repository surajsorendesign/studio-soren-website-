/* Studio Soren — skeleton loading.
   The skeleton is painted immediately (first frame, no grace period) so every load
   starts with a deliberate placeholder, then fades out the moment content is mounted.
   Image shimmer is applied only to images actually near the viewport that haven't
   decoded yet, so lazy-loaded images below the fold cost nothing. */
(function () {
  if (window.__sorenSkeleton) return;
  window.__sorenSkeleton = true;

  var FADE = 220;       // overlay fade-out
  var MIN_SHOW = 260;   // keep it on screen at least this long once shown (no strobe)
  var CAP = 8000;       // hard stop

  var css = [
    '@keyframes soren-skel-shine{0%{background-position:-160% 0}100%{background-position:260% 0}}',
    '.soren-skel-b{position:relative;overflow:hidden;border-radius:8px;background:rgba(255,255,255,.07)}',
    '.soren-skel-b::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(139,108,245,0) 20%,rgba(139,108,245,.16) 50%,rgba(139,108,245,0) 80%);background-size:200% 100%;animation:soren-skel-shine 1.5s linear infinite}',
    'html[data-theme="light"] .soren-skel-b{background:rgba(18,16,26,.07)}',
    '@media (prefers-color-scheme: light){html:not([data-theme="dark"]) .soren-skel-b{background:rgba(18,16,26,.07)}}',
    '#soren-skeleton{position:fixed;inset:0;z-index:2147483000;padding:0 24px;opacity:1;transition:opacity ' + FADE + 'ms ease;pointer-events:none;background:#0C0A12}',
    'html[data-theme="light"] #soren-skeleton{background:#FAF9FC}',
    '@media (prefers-color-scheme: light){html:not([data-theme="dark"]) #soren-skeleton{background:#FAF9FC}}',
    '#soren-skeleton[data-out="1"]{opacity:0}',
    '.soren-skel-wrap{max-width:1160px;margin:0 auto;display:flex;flex-direction:column;gap:56px;padding-top:20px}',
    '.soren-skel-nav{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:18px 22px;border-radius:999px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07)}',
    'html[data-theme="light"] .soren-skel-nav{background:rgba(18,16,26,.03);border-color:rgba(18,16,26,.07)}',
    '.soren-skel-navlinks{display:flex;gap:14px}',
    '.soren-skel-hero{display:flex;flex-direction:column;align-items:center;gap:18px;max-width:820px;margin:0 auto;padding-top:36px}',
    '.soren-skel-btns{display:flex;gap:14px;padding-top:14px}',
    '.soren-skel-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}',
    '.soren-skel-card{display:flex;flex-direction:column;gap:12px}',
    '@media (max-width:859px){.soren-skel-cards{grid-template-columns:1fr}.soren-skel-navlinks{display:none}}',
    'img.soren-img-skel{background:rgba(255,255,255,.07) linear-gradient(90deg,rgba(139,108,245,0) 20%,rgba(139,108,245,.16) 50%,rgba(139,108,245,0) 80%);background-size:200% 100%;animation:soren-skel-shine 1.5s linear infinite;border-radius:8px}',
    'html[data-theme="light"] img.soren-img-skel{background-color:rgba(18,16,26,.07)}',
    '@media (prefers-reduced-motion: reduce){.soren-skel-b::after,img.soren-img-skel{animation:none}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);

  function b(w, h, r) {
    return '<div class="soren-skel-b" style="width:' + w + ';height:' + h + (r ? ';border-radius:' + r : '') + '"></div>';
  }

  var markup =
    '<div class="soren-skel-wrap">' +
      '<div class="soren-skel-nav">' + b('132px', '26px') +
        '<div class="soren-skel-navlinks">' + b('72px', '14px', '7px') + b('64px', '14px', '7px') + b('86px', '14px', '7px') + b('58px', '14px', '7px') + '</div>' +
        b('132px', '38px', '999px') +
      '</div>' +
      '<div class="soren-skel-hero">' + b('200px', '13px', '7px') + b('100%', '52px') + b('76%', '52px') + b('82%', '16px', '8px') + b('58%', '16px', '8px') +
        '<div class="soren-skel-btns">' + b('168px', '46px', '999px') + b('150px', '46px', '999px') + '</div>' +
      '</div>' +
      '<div class="soren-skel-cards">' +
        '<div class="soren-skel-card">' + b('100%', '180px', '14px') + b('60%', '16px', '8px') + b('90%', '12px', '6px') + '</div>' +
        '<div class="soren-skel-card">' + b('100%', '180px', '14px') + b('55%', '16px', '8px') + b('85%', '12px', '6px') + '</div>' +
        '<div class="soren-skel-card">' + b('100%', '180px', '14px') + b('65%', '16px', '8px') + b('88%', '12px', '6px') + '</div>' +
      '</div>' +
    '</div>';

  var overlay = null, done = false, shownAt = 0;

  function ready() {
    var root = document.getElementById('dc-root');
    if (!root || !root.firstElementChild) return false;
    if (document.documentElement.classList.contains('sc-dc-streaming')) return false;
    if (document.querySelector('#dc-root .sc-placeholder')) return false;
    return root.getBoundingClientRect().height > 200;
  }

  function show() {
    if (done || overlay) return;
    overlay = document.createElement('div');
    overlay.id = 'soren-skeleton';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = markup;
    (document.body || document.documentElement).appendChild(overlay);
    shownAt = Date.now();
    // if it landed on <html> before <body> existed, re-home it once body is there
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', function () {
        if (overlay && document.body && overlay.parentNode !== document.body) document.body.appendChild(overlay);
      });
    }
  }

  function remove() {
    done = true;
    if (!overlay) return;
    overlay.setAttribute('data-out', '1');
    setTimeout(function () {
      if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
      overlay = null;
    }, FADE + 40);
  }

  function finish() {
    if (done) return;
    var held = Date.now() - shownAt;
    if (overlay && held < MIN_SHOW) setTimeout(remove, MIN_SHOW - held);
    else remove();
  }

  show();
  var start = Date.now();

  (function poll() {
    if (done) return;
    if (ready() || Date.now() - start > CAP) return finish();
    setTimeout(poll, 60);
  })();

  /* --- images: shimmer only for in-viewport images that haven't decoded --- */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var img = entries[i].target;
      if (!entries[i].isIntersecting) continue;
      io.unobserve(img);
      if (!img.complete || !img.naturalWidth) img.classList.add('soren-img-skel');
    }
  }, { rootMargin: '200px' }) : null;

  function watch(img) {
    if (img.__sorenWatched) return;
    img.__sorenWatched = true;
    if (img.complete && img.naturalWidth) return;
    function clear() {
      img.classList.remove('soren-img-skel');
      if (io) io.unobserve(img);
      img.removeEventListener('load', clear);
      img.removeEventListener('error', clear);
    }
    img.addEventListener('load', clear);
    img.addEventListener('error', clear);
    if (io) io.observe(img);
    else img.classList.add('soren-img-skel');
  }

  function scan(node) {
    if (!node || node.nodeType !== 1) return;
    if (node.tagName === 'IMG') watch(node);
    var imgs = node.querySelectorAll ? node.querySelectorAll('img') : [];
    for (var i = 0; i < imgs.length; i++) watch(imgs[i]);
  }

  function observe() {
    scan(document.body);
    new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var added = muts[i].addedNodes;
        for (var j = 0; j < added.length; j++) scan(added[j]);
      }
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.body) observe();
  else document.addEventListener('DOMContentLoaded', observe);
})();
