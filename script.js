// Smooth scroll for navigation links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor link behavior
    const href = this.getAttribute('href');
    const targetSection = document.querySelector(href);
    
    const scrollTop = targetSection.offsetTop; // Get target section offset from top

    // Animate scroll to target section
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth' // Smooth scrolling animation
    });
  });
});

// Add a simple text typing animation (replace "Welcome!" with your desired text)
const typedText = document.getElementById('typedText'); // Assuming you have an element with id="typedText"
const textArray = ["Welcome to the world of music!", "Experience the magic of Sheikh Ishtiaque's voice."]; // Replace with your text phrases
let currentTextIndex = 0;
let typingSpeed = 100; // Adjust typing speed (milliseconds)

function typeWriter() {
  if (currentTextIndex < textArray.length) {
    const currentChar = textArray[currentTextIndex];
    typedText.textContent += currentChar;
    currentTextIndex++;
    setTimeout(typeWriter, typingSpeed);
  }
}

typeWriter(); // Start the typing animation

// Add a subtle hover effect for navigation links (improved)
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.color = '#ca6924'; // Change color to dark orange on hover
    this.style.textDecoration = 'underline'; // Add an underline on hover
  });
  
  link.addEventListener('mouseleave', function() {
    this.style.color = '#333'; // Reset color to default on mouseleave
    this.style.textDecoration = 'none'; // Remove underline on mouseleave
  });
});

// Parallax scrolling effect on the cover section
const coverSection = document.querySelector('.cover-section');
const coverText = document.querySelector('.cover-section .cover-text');

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY; // Get current scroll position
  const movementFactor = 0.2; // Adjust movement factor for parallax effect
  
  coverText.style.transform = `translateY(${scrollY * movementFactor}px)`; // Move cover text based on scroll position
});
