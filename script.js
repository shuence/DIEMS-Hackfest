// Select all navigation links and the hamburger
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-links');

// Function to remove active class from all links
const removeActiveClass = () => {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
};

// Add click event listeners to each link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all links
    removeActiveClass();
    // Add active class to the clicked link
    this.classList.add('active');

    // Close the menu on click
    navMenu.classList.remove('show');
  });
});

// Add click event listener to hamburger
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show'); // Toggle the menu
});
