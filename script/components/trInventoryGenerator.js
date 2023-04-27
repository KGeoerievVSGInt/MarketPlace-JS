import { toggleInventoryModalEdit } from "../utils/toggleFuncts/toggleInventoryModal.js";
import { toggleInventoryPopup } from "../utils/toggleFuncts/togglePopup.js";

export function trInventoryGenerator(data) {
  const tr = document.createElement("tr");

  const code = document.createElement("td");
  code.textContent = data.code;

  const name = document.createElement("td");
  name.textContent = data.name;

  const category = document.createElement("td");
  category.textContent = data.category;

  const forSale = document.createElement("td");
  forSale.textContent = data.quantityForSale;

  const total = document.createElement("td");
  total.textContent = data.quantity;

  const actions = document.createElement("td");
  actions.className = "actions";

  const editButton = document.createElement("button");
  const pen = document.createElement("img");
  pen.setAttribute("src", "../../img/inventory/Vector_pen.svg");
  pen.setAttribute("alt", "Edit Button");
  editButton.appendChild(pen);
  editButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleInventoryModalEdit(data);
  });

  const deleteButton = document.createElement("button");
  const trashCan = document.createElement("img");
  trashCan.setAttribute("src", "../../img/inventory/Vector_trash.svg");
  trashCan.setAttribute("alt", "Delete Button");
  deleteButton.appendChild(trashCan);
  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleInventoryPopup(e.currentTarget.parentElement, {
      message: "Are you sure you want to remove this item ?",
      code: data.code,
    });
  });
  actions.appendChild(editButton);
  actions.appendChild(deleteButton);

  tr.appendChild(code);
  tr.appendChild(name);
  tr.appendChild(category);
  tr.appendChild(forSale);
  tr.appendChild(total);
  tr.appendChild(actions);

  return tr;
}
