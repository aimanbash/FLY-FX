function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburgerIcon"); // Add an ID to your hamburger
  menu.classList.toggle("active");
  hamburger.classList.toggle("hidden"); // Toggle hidden or replace with 'open' class for icon change
}
