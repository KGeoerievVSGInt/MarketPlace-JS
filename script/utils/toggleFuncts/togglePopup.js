import {
  createInventoryPopup,
  createMarketPopup,
  createMyOrderPopup,
} from "../../components/createPopup.js";

function togglePopup(type) {
  const popupTypes = {
    market: createMarketPopup,
    inventory: createInventoryPopup,
    myOrder: createMyOrderPopup,
  };
  return function (parent, data) {
    let confirmationPopup = parent.querySelector(".confirmation-popup");
    if (confirmationPopup == null) {
      confirmationPopup = popupTypes[type](data, parent);
      parent.appendChild(confirmationPopup);
      if (confirmationPopup.getBoundingClientRect().right > window.innerWidth) {
        confirmationPopup.classList.toggle("active");
      }
    } else {
      confirmationPopup.remove();
    }
  };
}
export const toggleMarketPopup = togglePopup("market");
export const toggleInventoryPopup = togglePopup("inventory");
export const toggleMyOrdersPopup = togglePopup("myOrder");
