export function toggleHamburger(e) {
  e.preventDefault();
  const [main] = document.getElementsByTagName("MAIN");
  main.classList.toggle("main-toggle");
  const [aside] = document.getElementsByTagName("ASIDE");
  aside.classList.toggle("aside-show");
}
