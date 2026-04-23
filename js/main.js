/* Sumak Kawsay — main.js */

(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.primary-nav__list');

  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('open');
      document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : '';
    });
  }

  /* ---- Dropdown toggle ---- */
  var dropdownToggles = document.querySelectorAll('.primary-nav__dropdown-toggle');

  dropdownToggles.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var parent = btn.closest('.primary-nav__item--dropdown');
      if (!parent) return;
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.primary-nav__item--dropdown').forEach(function (el) {
        if (el !== parent) {
          el.classList.remove('open');
          var b = el.querySelector('.primary-nav__dropdown-toggle');
          if (b) b.setAttribute('aria-expanded', 'false');
        }
      });
      parent.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  });

  /* Close dropdowns on outside click */
  document.addEventListener('click', function () {
    document.querySelectorAll('.primary-nav__item--dropdown').forEach(function (el) {
      el.classList.remove('open');
      var b = el.querySelector('.primary-nav__dropdown-toggle');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- Copy to clipboard (Zelle email) ---- */
  var copyButtons = document.querySelectorAll('[data-copy]');

  copyButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function () {
          var original = btn.textContent;
          btn.textContent = btn.getAttribute('data-copied') || 'Copied!';
          setTimeout(function () { btn.textContent = original; }, 2000);
        });
      }
    });
  });

  /* Close mobile nav on link click */
  if (navList) {
    navList.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Contact form: AJAX submission to Formspree, inline thank-you ---- */
  var contactForm = document.querySelector('[data-contact-form]');
  if (contactForm) {
    var successBox = document.querySelector('[data-form-success]');
    var errorBox = contactForm.querySelector('[data-form-error]');
    var submitBtn = contactForm.querySelector('button[type="submit"]');
    var submitLabel = submitBtn ? submitBtn.textContent : '';

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errorBox) errorBox.setAttribute('hidden', '');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = submitBtn.getAttribute('data-sending') || submitLabel;
      }

      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          contactForm.style.display = 'none';
          if (successBox) {
            successBox.removeAttribute('hidden');
            successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        } else {
          response.json().then(function () {
            if (errorBox) errorBox.removeAttribute('hidden');
          }).catch(function () {
            if (errorBox) errorBox.removeAttribute('hidden');
          });
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = submitLabel;
          }
        }
      }).catch(function () {
        if (errorBox) errorBox.removeAttribute('hidden');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitLabel;
        }
      });
    });
  }

  /* ---- Fade-up on scroll reveal ---- */
  var reveals = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---- Pages with threshold hero: transparent header + parallax ---- */
  if (document.body.classList.contains('has-threshold')) {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var heroImg = document.querySelector('.hero__backdrop img, .page-threshold__backdrop img');
    var heroEl = document.querySelector('.hero, .page-threshold');
    var heroHeight = heroEl ? heroEl.getBoundingClientRect().height : window.innerHeight;
    var threshold = heroHeight * 0.6;
    var ticking = false;

    var onScroll = function () {
      var y = window.scrollY;
      if (y > threshold) {
        document.body.classList.add('is-scrolled');
      } else {
        document.body.classList.remove('is-scrolled');
      }
      if (heroImg && !reduced && y < heroHeight * 1.2) {
        heroImg.style.transform = 'translate3d(0,' + (y * 0.12) + 'px,0)';
      }
      ticking = false;
    };

    var requestTick = function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', function () {
      heroHeight = heroEl ? heroEl.getBoundingClientRect().height : window.innerHeight;
      threshold = heroHeight * 0.6;
    }, { passive: true });
    onScroll();
  }
})();
