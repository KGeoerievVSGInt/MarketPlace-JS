export function toggleInventoryModalDropdown(e) {
  e.preventDefault();
  const chevron = document.querySelector(".category-dropdown>button>svg");
  const dropdownChild = document.querySelector(".category-dropdown-child");
  chevron.classList.toggle("arrow-down");
  dropdownChild.classList.toggle("open");
}
