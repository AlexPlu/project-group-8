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

document.addEventListener('DOMContentLoaded', function() {
    var title = document.getElementById("title");
    var text = title.textContent.trim();
    title.textContent = ""; // Clear the original text
    // Create a span element to contain the typed text
    var typedText = document.createElement("span");
    title.appendChild(typedText);
    // Function to add a character to the typed text
    function addCharacter(index) {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            setTimeout(function() {
                addCharacter(index + 1); // Move to the next character
            }, 55); // Adjust typing speed here (in milliseconds)
        }
    }
    // Function to start the typing animation
    function startTyping() {
        // Clear existing typed text
        typedText.textContent = "";
        // Start typing animation
        addCharacter(0);
    }
    // Function to restart typing animation every 30 seconds
    function repeatTyping() {
        // Start repeating the typing animation every 30 seconds
        setInterval(startTyping, 30000); // 30 seconds = 30000 milliseconds
    }
    startTyping();
    repeatTyping();
})



