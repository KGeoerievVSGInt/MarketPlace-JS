import { toggleMarketModal } from "../utils/toggleFuncts/toggleMarketModal.js";

export function createMarketDetailsModal(data) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const closeButton = document.createElement("button");
  closeButton.addEventListener("click", toggleMarketModal);
  const closeIcon = document.createElement("img");
  closeIcon.setAttribute("src", "../../img/marketPage/Vector_close.svg");
  closeIcon.setAttribute("alt", "Close Details Modal");
  closeButton.appendChild(closeIcon);
  modalContent.appendChild(closeButton);

  const productImage = document.createElement("img");
  productImage.setAttribute("src", data.image);
  productImage.setAttribute("alt", "hard coded");
  modalContent.appendChild(productImage);

  const itemInfo = document.createElement("div");
  itemInfo.classList.add("item-info");

  const itemInfoLeft = document.createElement("div");
  itemInfoLeft.classList.add("item-info-left");

  const itemName = document.createElement("div");
  itemName.classList.add("item-info-left-name");
  itemName.textContent = data.name;
  itemInfoLeft.appendChild(itemName);

  const itemCategory = document.createElement("div");
  itemCategory.classList.add("item-info-left-category");
  itemCategory.textContent = data.category;
  itemInfoLeft.appendChild(itemCategory);

  itemInfo.appendChild(itemInfoLeft);

  const itemInfoRight = document.createElement("div");
  itemInfoRight.classList.add("item-info-right");

  const itemPrice = document.createElement("div");
  itemPrice.classList.add("item-info-right-price");
  itemPrice.textContent = data.price;
  itemInfoRight.appendChild(itemPrice);

  const itemQuantity = document.createElement("div");
  itemQuantity.classList.add("item-info-right-quantity");
  itemQuantity.textContent = `Qty: 5`;
  itemInfoRight.appendChild(itemQuantity);

  itemInfo.appendChild(itemInfoRight);
  modalContent.appendChild(itemInfo);

  const itemDescription = document.createElement("div");
  itemDescription.classList.add("item-description");
  itemDescription.textContent = data.description;

  modalContent.appendChild(itemDescription);

  modal.appendChild(modalContent);

  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");

  modal.appendChild(backdrop);

  return modal;
}
