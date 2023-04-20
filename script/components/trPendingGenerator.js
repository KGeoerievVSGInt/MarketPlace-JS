export function trPendingGenerator(data) {
  const tr = document.createElement("tr");
  const code = document.createElement("td");
  code.textContent = data.id;
  const qty = document.createElement("td");
  qty.textContent = data.forSale;
  const price = document.createElement("td");
  price.textContent = data.price;
  const orderedBy = document.createElement("td");
  orderedBy.textContent = data.orderedBy;
  const orderedDate = document.createElement("td");
  orderedDate.textContent = data.orderDate;
  const action = document.createElement("td");
  action.className = "action";
  const completeButtonElement = document.createElement("button");
  completeButtonElement.textContent = "Complete";
  action.appendChild(completeButtonElement);

  tr.appendChild(code);
  tr.appendChild(qty);
  tr.appendChild(price);
  tr.appendChild(orderedBy);
  tr.appendChild(orderedDate);
  tr.appendChild(action);

  return tr;
}
