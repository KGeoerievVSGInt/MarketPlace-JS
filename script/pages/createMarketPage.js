import { createCardItem } from "../components/createCardItem.js";
import { getMarket } from "../utils/getData.js";

export function createMarketPage() {
  const main = document.createElement("main");
  main.classList.add("main-content");
  const div = document.createElement("div");
  div.classList.add("cardItem-container");
  getMarket(div, createCardItem);

  main.appendChild(div);

  return main;
}
