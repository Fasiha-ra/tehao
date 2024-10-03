//menu icon
// Select the hamburger and the nav
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Add event listener to toggle 'nav-open' class on click
hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'nav-open' class to close the menu
    nav.classList.remove('nav-open');
  });
});

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  const sectionToShow = document.getElementById(sectionId);
  sectionToShow.classList.add("active");

  // Update the URL hash without refreshing the page
  window.location.hash = sectionId;
}

// When page loads or refreshes, check the URL hash and show the correct section
function handleHashChange() {
  // Get the current hash value (without the # symbol)
  const hash = window.location.hash.replace("#", "");

  // If hash is empty, default to 'home'
  const sectionToShow = hash || "home";

  // Show the correct section
  showSection(sectionToShow);
}

// Attach event listener for hash changes (for back/forward navigation)
window.addEventListener("hashchange", handleHashChange);

// Call the function on page load to show the correct section
handleHashChange();