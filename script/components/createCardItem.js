import { toggleMarketDropdown } from "../utils/toggleFuncts/toggleMarketDropdown.js";
import { toggleMarketPopup } from "../utils/toggleFuncts/togglePopup.js";
import { toggleMarketModal } from "../utils/toggleFuncts/toggleMarketModal.js";
export function createCardItem(data) {
  const cardItem = document.createElement("div");
  cardItem.classList.add("card-item");
  const toggleAnchor = document.createElement("a");
  toggleAnchor.setAttribute("href", "#");
  toggleAnchor.addEventListener("click", (e) => {
    toggleMarketModal(e, data.code);
  });
  const img = document.createElement("img");
  img.src = data.imageURL;
  img.alt = "hard coded";
  toggleAnchor.appendChild(img);
  const itemOptions = document.createElement("div");
  itemOptions.classList.add("item-options");

  const itemOptionsInfo = document.createElement("div");
  itemOptionsInfo.classList.add("item-options-info");

  const itemPrice = document.createElement("span");
  itemPrice.textContent = `${data.price}BGN`;

  const itemCategory = document.createElement("span");
  itemCategory.classList.add("item-options-info-category");
  itemCategory.textContent = data.category;

  itemOptionsInfo.appendChild(itemPrice);
  itemOptionsInfo.appendChild(itemCategory);

  const itemOptionsPurchase = document.createElement("div");
  itemOptionsPurchase.classList.add("item-options-purchase");

  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");

  const dropdownSpan = document.createElement("span");
  dropdownSpan.textContent = "Qty";

  dropdown.appendChild(dropdownSpan);

  const dropdownButton = document.createElement("button");
  dropdownButton.classList.add("dropdown-button");
  dropdownButton.addEventListener("click", toggleMarketDropdown);
  const buttonSpan = document.createElement("span");
  buttonSpan.textContent = "1";
  const droptdownSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  droptdownSvg.setAttribute("width", "10");
  droptdownSvg.setAttribute("height", "4");
  droptdownSvg.setAttribute("viewBox", "0 0 10 4");

  const droptdownSvgPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  droptdownSvgPath.setAttribute("d", "M5 4L0.669872 0.25L9.33013 0.25L5 4Z");
  droptdownSvgPath.setAttribute("fill", "#545454");

  droptdownSvg.appendChild(droptdownSvgPath);
  dropdownButton.appendChild(buttonSpan);
  dropdownButton.appendChild(droptdownSvg);

  const dropdownChild = document.createElement("div");
  dropdownChild.classList.add("dropdown-child");
  for (let i = 1; i <= Number(data.quantityForSale); i++) {
    const option = document.createElement("div");
    option.classList.add("option");
    option.textContent = i;
    dropdownChild.appendChild(option);
  }

  const purchaseButton = document.createElement("button");
  purchaseButton.classList.add("purchase-button");
  const dollar = document.createElement("img");
  dollar.setAttribute("src", "../../img/marketPage/Vector_dollar.svg");
  dollar.setAttribute("alt", "Purchase Button");

  purchaseButton.append(dollar);

  purchaseButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMarketPopup(
      e.currentTarget.parentElement.parentElement.parentElement,
      {
        price: data.price,
        quantity: Number(buttonSpan.textContent),
        code: data.code,
      }
    );
  });
  dropdown.appendChild(dropdownButton);
  dropdown.appendChild(dropdownChild);

  itemOptionsPurchase.appendChild(dropdown);
  itemOptionsPurchase.appendChild(purchaseButton);

  itemOptions.appendChild(itemOptionsInfo);
  itemOptions.appendChild(itemOptionsPurchase);

  cardItem.appendChild(toggleAnchor);
  cardItem.appendChild(itemOptions);
  return cardItem;
}
