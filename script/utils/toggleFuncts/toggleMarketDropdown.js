export function toggleMarketDropdown(e) {
  e.preventDefault();
  const parent = e.currentTarget.parentElement;
  const child = parent.querySelector(".dropdown-child");
  child.style.display = child.style.display == "block" ? "none" : "block";
  const options = child.querySelectorAll(".option");
  parent.querySelector(".dropdown-button>svg").style.transform =
    child.style.display == "block" ? "rotate(180deg)" : "";
  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      const button = parent.querySelector(".dropdown-button");
      const text = button.querySelector("span");
      text.textContent = e.target.textContent;
      child.style.display = "none";
    });
  });
}
