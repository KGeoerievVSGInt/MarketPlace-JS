import { trInventoryGenerator } from "../components/trInventoryGenerator.js";
import { getData } from "../utils/getData.js";
import { toggleInventoryModalAdd } from "../utils/toggleFuncts/toggleInventoryModal.js";

export function createInventoryTable() {
  const main = document.createElement("main");
  main.className = "main-content-inventory";

  const form = document.createElement("form");
  form.className = "add-new";

  const addNewInput = document.createElement("div");
  addNewInput.className = "add-new-input";

  const input = document.createElement("input");
  input.type = "text";
  input.id = "new-add";
  input.placeholder = "Search...";

  addNewInput.appendChild(input);

  const addNewButton = document.createElement("button");
  addNewButton.className = "add-new-button";
  addNewButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleInventoryModalAdd();
  });

  const buttonText = document.createElement("p");
  buttonText.className = "add-new-button-text";

  const iTag = document.createElement("i");
  iTag.className = "fa-regular fa-plus";

  const text = document.createTextNode(" Add new");

  buttonText.appendChild(iTag);
  buttonText.appendChild(text);
  addNewButton.appendChild(buttonText);

  form.appendChild(addNewInput);
  form.appendChild(addNewButton);

  const tableDiv = document.createElement("div");
  tableDiv.className = "table";

  const table = document.createElement("table");
  table.className = "inventory-content";

  const thead = document.createElement("thead");

  const tr = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.textContent = "Code";
  const th2 = document.createElement("th");
  th2.textContent = "Name";
  const th3 = document.createElement("th");
  th3.textContent = "Category";
  const th4 = document.createElement("th");
  th4.textContent = "For Sale";
  const th5 = document.createElement("th");
  th5.textContent = "QTY";
  const th6 = document.createElement("th");
  th6.textContent = "Actions";

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);
  tr.appendChild(th6);

  thead.appendChild(tr);

  const tbody = document.createElement("tbody");

  getData(tbody, trInventoryGenerator);
  const pagination = document.createElement("div");
  pagination.classList.add("pagination-container");
  table.appendChild(thead);
  table.appendChild(tbody);

  tableDiv.appendChild(table);
  tableDiv.appendChild(pagination);

  main.appendChild(form);
  main.appendChild(tableDiv);
  return main;
}
