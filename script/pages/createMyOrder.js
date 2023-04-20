import { trOrderGenerator } from "../components/trOrderGenerator.js";
import { getData } from "../utils/getData.js";

export function createMyOrder() {
  const main = document.createElement("main");
  main.classList.add("main-content-orders");

  const table = document.createElement("table");
  table.classList.add("pending-orders");

  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  const name = document.createElement("th");
  name.textContent = "Name";

  const qty = document.createElement("th");
  qty.textContent = "QTY";

  const price = document.createElement("th");
  price.textContent = "Price";

  const orderDate = document.createElement("th");
  orderDate.textContent = "Order Date";

  const status = document.createElement("th");
  status.textContent = "Status";

  tr.appendChild(name);
  tr.appendChild(qty);
  tr.appendChild(price);
  tr.appendChild(orderDate);
  tr.appendChild(status);
  thead.appendChild(tr);

  const tbody = document.createElement("tbody");
  getData(tbody, trOrderGenerator)
  table.appendChild(thead);
  table.appendChild(tbody);
  main.appendChild(table);
  return main;
}
