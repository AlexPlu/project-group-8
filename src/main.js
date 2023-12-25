const mobileMenu = document.querySelector('.menu-container');
const openMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.menu-button');

const aboutBtn = document.getElementById('menu-about');
const yachtsBtn = document.getElementById('menu-yachts');
const reviewsBtn = document.getElementById('menu-reviews');

var toggleMenu = () => {
  var isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  var scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
aboutBtn.addEventListener('click', toggleMenu);
yachtsBtn.addEventListener('click', toggleMenu);
reviewsBtn.addEventListener('click', toggleMenu);
