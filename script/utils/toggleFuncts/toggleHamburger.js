export function toggleHamburger(e) {
  e.preventDefault();
  const [main] = document.getElementsByTagName("MAIN");
  main.style.display = main.style.display == "none" ? "flex" : "none";
  const [aside] = document.getElementsByTagName("ASIDE");
  aside.style.display = aside.style.display == "flex" ? "none" : "flex";
}
