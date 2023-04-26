import { del } from "../utils/fetcher.js";
import { toggleInventoryPopup } from "../utils/toggleFuncts/togglePopup.js";

function createPopup(secondClass) {
  return function (data, parent) {
    const popup = document.createElement("div");
    popup.classList.add("confirmation-popup", secondClass);
    const message = document.createElement("p");
    if (secondClass == "market") {
      const itemText = document.createTextNode(`Are you sure you want to buy `);
      message.appendChild(itemText);

      const strongItemCount = document.createElement("strong");
      const itemCountText = document.createTextNode(`${data.qty}`);
      strongItemCount.appendChild(itemCountText);
      message.appendChild(strongItemCount);

      const priceText = document.createTextNode(` item for `);
      message.appendChild(priceText);

      const strongItemPrice = document.createElement("strong");
      const itemPriceText = document.createTextNode(
        `${data.price * data.qty} BGN`
      );
      strongItemPrice.appendChild(itemPriceText);
      message.appendChild(strongItemPrice);
    } else {
      message.textContent = data.message;
    }
    popup.appendChild(message);

    const buttons = document.createElement("div");
    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes";
    yesButton.addEventListener(
      "click",
      secondClass == "market"
        ? () => {}
        : (e) => {
            e.preventDefault();
            del(undefined, data.id);
            toggleInventoryPopup(parent);
          }
    );
    buttons.appendChild(yesButton);
    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.addEventListener("click", (e) => {
      e.preventDefault();
      toggleInventoryPopup(parent);
    });
    buttons.appendChild(noButton);

    popup.appendChild(buttons);

    return popup;
  };
}

export const createMarketPopup = createPopup("market");
export const createInventoryPopup = createPopup(null);
export const createMyOrderPopup = createPopup(null);
