// UI/UX: navigation behaviour
(function () {
  var header = document.querySelector('.site-header');
  var nav = header && header.querySelector('nav');
  if (!nav) return;

  // Mark the current page.
  var here = location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '');
  nav.querySelectorAll('a').forEach(function (a) {
    var p = new URL(a.href, location.href).pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '');
    if (p === here) a.setAttribute('aria-current', 'page');
  });

  // Collapsible menu on narrow screens.
  document.documentElement.classList.add('js');
  var btn = document.createElement('button');
  var mq = window.matchMedia('(min-width: 48rem)');
  nav.id = nav.id || 'site-nav';
  btn.type = 'button';
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-controls', nav.id);
  btn.textContent = 'Menu';
  header.insertBefore(btn, nav);

  function set(open) {
    btn.setAttribute('aria-expanded', String(open));
    nav.hidden = !open && !mq.matches;
  }
  btn.addEventListener('click', function () { set(nav.hidden); });
  header.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !nav.hidden && !mq.matches) { set(false); btn.focus(); }
  });
  (mq.addEventListener ? mq.addEventListener('change', function () { set(false); }) : null);
  set(false);
})();
