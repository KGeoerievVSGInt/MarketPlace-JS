import { createHeader } from "../components/createHeader.js";
import { createNav } from "../components/createNav.js";
import { createMarketPage } from "./createMarketPage.js";
import { createPendingOrders } from "./createPendingOrders.js";
import { createMyOrder } from "./createMyOrder.js";
import { getPath, isValidUrl } from "../utils/getPath.js";
import { createHomePage } from "./createHomePage.js";
import { createInventoryTable } from "./createInventoryTable.js";

const pageTypes = {
  "/marketplace": createMarketPage(),
  "/inventory": createInventoryTable(),
  "/pendingOrders": createPendingOrders(),
  "/myOrders": createMyOrder(),
};
export function contentPage(href) {
  let location = href;
  if (isValidUrl(href)) {
    location = getPath(href);
  }
  if (location == "/") {
    createHomePage();
  } else {
    const body = document.querySelector("body");
    const innerDiv = body.querySelector("div");
    if (innerDiv != null) {
      innerDiv.remove();
    }

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    wrapper.appendChild(createHeader(location));

    const content = document.createElement("div");
    content.classList.add("content");

    wrapper.appendChild(content);
    content.appendChild(createNav());
    content.appendChild(pageTypes[location]);
    body.appendChild(wrapper);
    history.pushState({}, "", location);
  }
}
