import { createInventoryDetailsModal } from "../../components/createInventoryDetailsModal.js";

function toggleInventoryModal(type) {
  return function (data) {
    const main = document.querySelector("main");
    let modal = document.querySelector(".modal");
    if (modal == null) {
      modal = createInventoryDetailsModal(type, data);
      main.classList.add("main-hidden");
      main.appendChild(modal);
    } else {
      main.classList.remove("main-hidden");
      const backdrop = document.querySelector(".backdrop");
      backdrop.classList.add("out");
      document.querySelector(".item-management").classList.add("modal-out");
      backdrop.addEventListener("animationend", () => {
        modal.remove();
      });
    }
  };
}

export const toggleInventoryModalAdd = toggleInventoryModal("add");
export const toggleInventoryModalEdit = toggleInventoryModal("edit");
