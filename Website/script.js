// Header background on scroll
const header = document.getElementById("site-header");
const scrolledClasses = ["border-b", "border-forest/10", "bg-canvas/95", "shadow-sm", "backdrop-blur"];

function onScroll() {
  const scrolled = window.scrollY > 24;
  scrolledClasses.forEach((c) => header.classList.toggle(c, scrolled));
  header.classList.toggle("bg-transparent", !scrolled);
}
onScroll();
window.addEventListener("scroll", onScroll);

// Mobile menu
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const iconMenu = document.getElementById("icon-menu");
const iconClose = document.getElementById("icon-close");

function setMenu(open) {
  mobileMenu.classList.toggle("hidden", !open);
  iconMenu.classList.toggle("hidden", open);
  iconClose.classList.toggle("hidden", !open);
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menuButton.setAttribute("aria-expanded", String(open));
}

menuButton.addEventListener("click", () => setMenu(mobileMenu.classList.contains("hidden")));
mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
