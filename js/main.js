document.addEventListener('DOMContentLoaded', function () {

  // Header scroll
  var header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.pageYOffset > 30);
  });

  // Hamburger
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Dropdown (mobile)
  var dropdown = document.querySelector('.dropdown');
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  if (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('open');
      }
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links > li > a:not(.dropdown-toggle)').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });
  document.querySelectorAll('.dropdown-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        dropdown.classList.remove('open');
      }
    });
  });

  // ===== Center-Mode Carousel =====
  var stage = document.getElementById('carouselStage');
  var prevBtn = document.querySelector('.carousel-prev');
  var nextBtn = document.querySelector('.carousel-next');
  var nameLabel = document.getElementById('carouselName');
  var sizeLabel = document.getElementById('carouselSize');

  if (stage && prevBtn && nextBtn) {
    var slides = Array.from(stage.querySelectorAll('.carousel-slide'));
    var total = slides.length;
    var current = 0;
    var isAnimating = false;
    var autoTimer;

    function updatePositions() {
      slides.forEach(function (slide, i) {
        // Remove all position classes
        slide.className = 'carousel-slide';

        // Calculate relative position from current
        var diff = i - current;

        // Wrap around for circular
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        // Assign position class
        if (diff === 0) {
          slide.classList.add('pos-0');
        } else if (diff === 1) {
          slide.classList.add('pos-1');
        } else if (diff === -1) {
          slide.classList.add('pos--1');
        } else if (diff === 2) {
          slide.classList.add('pos-2');
        } else if (diff === -2) {
          slide.classList.add('pos--2');
        } else if (diff === 3) {
          slide.classList.add('pos-3');
        } else if (diff === -3) {
          slide.classList.add('pos--3');
        } else {
          slide.classList.add('pos-hidden');
        }
      });

      // Update label
      var active = slides[current];
      if (nameLabel) nameLabel.textContent = active.getAttribute('data-name') || '';
      if (sizeLabel) sizeLabel.textContent = active.getAttribute('data-size') || '';
    }

    function goNext() {
      if (isAnimating) return;
      isAnimating = true;
      current = (current + 1) % total;
      updatePositions();
      setTimeout(function () { isAnimating = false; }, 550);
    }

    function goPrev() {
      if (isAnimating) return;
      isAnimating = true;
      current = (current - 1 + total) % total;
      updatePositions();
      setTimeout(function () { isAnimating = false; }, 550);
    }

    nextBtn.addEventListener('click', function () { goNext(); resetAuto(); });
    prevBtn.addEventListener('click', function () { goPrev(); resetAuto(); });

    // Click slide to center it
    slides.forEach(function (slide, i) {
      slide.addEventListener('click', function () {
        if (i !== current && !isAnimating) {
          isAnimating = true;
          current = i;
          updatePositions();
          resetAuto();
          setTimeout(function () { isAnimating = false; }, 550);
        }
      });
    });

    // Autoplay
    function startAuto() { autoTimer = setInterval(goNext, 3000); }
    function resetAuto() { clearInterval(autoTimer); startAuto(); }

    var section = document.querySelector('.carousel-section');
    if (section) {
      section.addEventListener('mouseenter', function () { clearInterval(autoTimer); });
      section.addEventListener('mouseleave', function () { startAuto(); });
    }

    // Touch swipe
    var touchX = 0;
    stage.addEventListener('touchstart', function (e) {
      touchX = e.changedTouches[0].screenX;
    }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      var diff = touchX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) goNext(); else goPrev();
        resetAuto();
      }
    }, { passive: true });

    // Keyboard
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { goNext(); resetAuto(); }
      if (e.key === 'ArrowLeft') { goPrev(); resetAuto(); }
    });

    // Init
    updatePositions();
    startAuto();
  }

  // Scroll reveal
  function addReveal(selector, stagger) {
    document.querySelectorAll(selector).forEach(function (el, i) {
      el.classList.add('reveal');
      if (stagger) el.style.transitionDelay = (i % 4) * 0.08 + 's';
    });
  }

  addReveal('.product-card', true);
  addReveal('.info-card', true);
  addReveal('.section-title');
  addReveal('.about-teaser');
  addReveal('.contact-item', true);

  var reveals = document.querySelectorAll('.reveal');
  function checkReveal() {
    var wh = window.innerHeight;
    reveals.forEach(function (el) {
      if (el.getBoundingClientRect().top < wh - 60) el.classList.add('visible');
    });
  }
  window.addEventListener('scroll', checkReveal);
  checkReveal();

  // Back to top
  var btn = document.querySelector('.back-to-top');
  if (btn) {
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', window.pageYOffset > 400);
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Form validation
  var form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('.form-group').forEach(function (g) { g.classList.remove('error'); });

      ['name', 'email', 'phone', 'subject', 'message'].forEach(function (f) {
        var input = form.querySelector('[name="' + f + '"]');
        if (input && !input.value.trim()) {
          input.closest('.form-group').classList.add('error');
          valid = false;
        }
      });

      var email = form.querySelector('[name="email"]');
      if (email && email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        email.closest('.form-group').classList.add('error');
        email.closest('.form-group').querySelector('.error-msg').textContent = 'Please enter a valid email';
        valid = false;
      }

      if (valid) {
        form.style.display = 'none';
        document.querySelector('.form-success').classList.add('show');
      }
    });
  }
});
