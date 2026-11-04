(function () {
  var EMAIL = 'truelovefinancialservices@gmail.com';

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('nav');
  function closeMenu() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeMenu(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
  }

  // Scroll reveal
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Service links preselect the topic in the form
  var topic = document.getElementById('f-topic');
  document.querySelectorAll('[data-topic]').forEach(function (a) {
    a.addEventListener('click', function () { if (topic) topic.value = a.dataset.topic; });
  });

  // Enquiry form: opens the visitor's email app with the details filled in
  var form = document.getElementById('enquiry');
  var err = document.getElementById('form-error');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = null;
      ['f-name', 'f-phone', 'f-email'].forEach(function (id) {
        var el = document.getElementById(id);
        var ok = el.value.trim() !== '' && (el.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()));
        el.setAttribute('aria-invalid', ok ? 'false' : 'true');
        if (!ok && !bad) bad = el;
      });
      if (bad) { err.hidden = false; bad.focus(); return; }
      err.hidden = true;
      var d = new FormData(form);
      var subject = (d.get('topic') || 'Enquiry') + ' – ' + d.get('name');
      var body = [
        'Name: ' + d.get('name'),
        'Phone: ' + d.get('phone'),
        'Email: ' + d.get('email'),
        'Help with: ' + d.get('topic'),
        '',
        d.get('message') || ''
      ].join('\n');
      window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
