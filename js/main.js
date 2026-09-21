// ============================================================
//   GWA – Girinagar Welfare Association
//   Main JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ── Hero Slider ──────────────────────────────────────────
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  let timer;

  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function nextSlide() { goToSlide(current + 1); }
  function prevSlide() { goToSlide(current - 1); }

  function startAuto() {
    timer = setInterval(nextSlide, 4000);
  }

  function stopAuto() { clearInterval(timer); }

  if (slides.length > 0) {
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        stopAuto();
        goToSlide(i);
        startAuto();
      });
    });

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        stopAuto();
        prevSlide();
        startAuto();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        stopAuto();
        nextSlide();
        startAuto();
      });
    }

    startAuto();
  }

  // ── Search Toggle ────────────────────────────────────────
  const searchToggle = document.getElementById('search-toggle');
  const searchBar = document.getElementById('search-bar');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');

  if (searchToggle) {
    searchToggle.addEventListener('click', function () {
      searchBar.classList.toggle('visible');
      if (searchBar.classList.contains('visible')) {
        searchInput.focus();
      }
    });
  }

  if (searchClose) {
    searchClose.addEventListener('click', function () {
      searchBar.classList.remove('visible');
    });
  }

  // ── Hamburger (mobile nav) ───────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      mainNav.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }

  // Close mobile nav when a link is clicked
  if (mainNav) {
    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
      });
    });
  }

});
