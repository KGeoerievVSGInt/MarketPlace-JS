import { trPendingGenerator } from "../components/trPendingGenerator.js";
import { getData } from "../utils/getData.js";

export function createPendingOrders() {
  const main = document.createElement("main");
  main.className = "main-content-pending";

  const table = document.createElement("table");
  table.className = "pending-orders";

  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const code = document.createElement("th");
  code.textContent = "Code";
  const qty = document.createElement("th");
  qty.textContent = "QTY";
  const price = document.createElement("th");
  price.textContent = "Price";
  const orderedBy = document.createElement("th");
  orderedBy.textContent = "Ordered By";
  const orderDate = document.createElement("th");
  orderDate.textContent = "Order Date";
  const action = document.createElement("th");
  action.textContent = "Action";

  tr.appendChild(code);
  tr.appendChild(qty);
  tr.appendChild(price);
  tr.appendChild(orderedBy);
  tr.appendChild(orderDate);
  tr.appendChild(action);
  thead.appendChild(tr);

  const tbody = document.createElement("tbody");
  getData(tbody, trPendingGenerator);
  table.appendChild(thead);
  table.appendChild(tbody);
  main.appendChild(table);
  return main;
}
