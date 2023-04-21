import { contentLoadPage } from "../pages/contentLoadPage.js";
import { contentPage } from "../pages/contentPage.js";
export function createNav(href) {
  const aside = document.createElement("aside");
  const nav = document.createElement("nav");
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    let current;
    if (e.target.tagName == "I") {
      current = e.target.parentElement;
    } else if (e.target.tagName == "A") {
      current = e.target;
    }
    if (current) {
      if (current.pathname == "/") {
        contentPage(current.pathname);
      } else {
        contentLoadPage(current.pathname);
      }
    }
  });
  const ul = document.createElement("ul");

  const liMarketplace = document.createElement("li");
  const aMarketplace = document.createElement("a");
  const iMarketplace = document.createElement("i");
  aMarketplace.href = "/marketplace";
  iMarketplace.classList.add("fa-solid", "fa-store");
  aMarketplace.appendChild(iMarketplace);
  aMarketplace.appendChild(document.createTextNode(" Marketplace"));

  liMarketplace.appendChild(aMarketplace);
  ul.appendChild(liMarketplace);

  const liInventory = document.createElement("li");
  const aInventory = document.createElement("a");
  const iInventory = document.createElement("i");
  aInventory.href = "/inventory";
  if (aInventory.pathname == href) {
    aInventory.classList.add("active-link");
  }
  iInventory.classList.add("fa-regular", "fa-clipboard");
  aInventory.appendChild(iInventory);
  aInventory.appendChild(document.createTextNode(" Inventory"));
  liInventory.appendChild(aInventory);
  ul.appendChild(liInventory);

  const liPendingOrders = document.createElement("li");
  const aPendingOrders = document.createElement("a");
  const iPendingOrders = document.createElement("i");
  aPendingOrders.href = "/pendingOrders";
  if (aPendingOrders.pathname == href) {
    aPendingOrders.classList.add("active-link");
  }
  iPendingOrders.classList.add("fa-regular", "fa-clock");
  aPendingOrders.appendChild(iPendingOrders);
  aPendingOrders.appendChild(document.createTextNode(" Pending Orders"));
  liPendingOrders.appendChild(aPendingOrders);
  ul.appendChild(liPendingOrders);

  const liMyOrder = document.createElement("li");
  const aMyOrder = document.createElement("a");
  const iMyOrder = document.createElement("i");
  aMyOrder.href = "/myOrders";
  if (aMyOrder.pathname == href) {
    aMyOrder.classList.add("active-link");
  }
  iMyOrder.classList.add("fa-solid", "fa-bag-shopping");
  aMyOrder.appendChild(iMyOrder);
  aMyOrder.appendChild(document.createTextNode(" My Orders"));
  liMyOrder.appendChild(aMyOrder);
  ul.appendChild(liMyOrder);

  const liLogout = document.createElement("li");
  liLogout.setAttribute("id", "logout");
  const aLogout = document.createElement("a");
  const iLogout = document.createElement("i");
  aLogout.href = "/";
  iLogout.classList.add("fa-solid", "fa-arrow-right-from-bracket");
  aLogout.appendChild(iLogout);
  aLogout.appendChild(document.createTextNode(" Logout"));
  liLogout.appendChild(aLogout);
  ul.appendChild(liLogout);

  nav.appendChild(ul);
  aside.appendChild(nav);

  return aside;
}
