function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}