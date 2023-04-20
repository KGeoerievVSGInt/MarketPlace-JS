import { createInventoryDetailsModal } from "../../components/createInventoryDetailsModal.js";

function toggleInventoryModal(type) {
  return function (data) {
    const main = document.querySelector("main");
    let modal = document.querySelector(".modal");
    if (modal == null) {
      modal = createInventoryDetailsModal(type, data);
      main.appendChild(modal);
    } else {
      modal.remove();
    }
  };
}

export const toggleInventoryModalAdd = toggleInventoryModal("add");
export const toggleInventoryModalEdit = toggleInventoryModal("edit");
