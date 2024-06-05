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

document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    // Flag to track if scroll-to-top button should be shown
    var isScrolling = false;
    // Initially hide the scroll-to-top button
    scrollToTopBtn.style.display = "none";
    window.addEventListener("scroll", function() {
        // Get the current scroll position
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        // If the user scrolls down, show the scroll-to-top button
        if (scrollPosition > 200) { // You can adjust this threshold as needed
            isScrolling = true;
            scrollToTopBtn.style.display = "block";
        } else {
            // If the user scrolls back up and the scroll-to-top button was shown by scrolling down,
            // hide the button.
            if (isScrolling) {
                scrollToTopBtn.style.display = "none";
                isScrolling = false;
            }
        }
    });
    // Scroll to top when the button is clicked
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Function to simulate hover effect on the button
function simulateHover() {
    var button = document.querySelector('.button-style');
    button.classList.add('hovered');
    // Remove the hover effect after 5 seconds
    setTimeout(function() {
      button.classList.remove('hovered');
    }, 5000);
}

// Initial call to start the effect
setTimeout(simulateHover, 8000); // Trigger after 8 seconds

// Set interval to repeat the effect every 13 seconds (8 seconds + 5 seconds)
setInterval(function() {
  simulateHover();
}, 13000);

// Function to apply typing effect to hero-title
const title = document.getElementById('title');
const text = "Explore the High Seas with Our Luxury Yacht Rentals"; // Text to be typed out
let index = 0;

function typeText() {
  title.style.visibility = 'visible'; // Make the hero-title visible before typing
  title.innerHTML = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
    setTimeout(typeText, 10000); // 10 seconds before repeating the typing animation
  } else {
    setTimeout(typeText, 100); // Typing speed
  }
}

// Adjusting the timing of the typing animation for tablets and mobile devices
const isMobileOrTablet = window.innerWidth < 768; // Assuming tablets and mobile have width less than 768px
const typingSpeed = isMobileOrTablet ? 150 : 100; // Typing speed for tablets and mobile is slower

typeText(typingSpeed);
