export function trPendingGenerator(data) {
  console.log(data);
  const tr = document.createElement("tr");
  const code = document.createElement("td");
  code.textContent = data.code;
  const qty = document.createElement("td");
  qty.textContent = data.quantity;
  const price = document.createElement("td");
  price.textContent = data.orderPrice;
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
