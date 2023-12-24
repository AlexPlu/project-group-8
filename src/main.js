const mobileMenu = document.querySelector('.menu-container');
const openMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.menu-button');

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
