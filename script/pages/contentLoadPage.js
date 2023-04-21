import { createMarketPage } from "./createMarketPage.js";
import { createInventoryTable } from "./createInventoryTable.js";
import { createPendingOrders } from "./createPendingOrders.js";
import { createMyOrder } from "./createMyOrder.js";

const pageTypes = {
  "/marketplace": createMarketPage(),
  "/inventory": createInventoryTable(),
  "/pendingOrders": createPendingOrders(),
  "/myOrders": createMyOrder(),
};
export function contentLoadPage(location) {
  const content = document.querySelector(".content");
  const main = document.querySelector("main");
  if (main != null) {
    main.remove();
  }
  content.appendChild(pageTypes[location]);
}
