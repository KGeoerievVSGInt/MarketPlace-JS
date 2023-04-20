export function toggleInventoryModalDropdown(e) {
  e.preventDefault();
  const chevron = e.currentTarget.querySelector("svg");
  const dropdownChild = document.querySelector(".category-dropdown-child");
  chevron.style.transform =
    dropdownChild.style.display == "block" ? "" : "rotate(180deg)";
  dropdownChild.style.display =
    dropdownChild.style.display == "block" ? "none" : "block";
}
