import { toggleMyOrdersPopup } from "../utils/toggleFuncts/togglePopup.js";

export function trOrderGenerator(data) {
  console.log(data);
  const tr = document.createElement("tr");

  const name = document.createElement("td");
  name.textContent = data.name;

  const qty = document.createElement("td");
  qty.textContent = data.quantity;

  const price = document.createElement("td");
  price.textContent = data.orderPrice;

  const orderDate = document.createElement("td");
  orderDate.textContent = data.orderDate;

  const status = document.createElement("td");
  status.classList.add("action");
  if (data.status === "Finished") {
    status.textContent = "Finished";
  } else if (data.status == "Pending") {
    const p = document.createElement("p");
    p.textContent = "Pending";
    const button = document.createElement("button");
    const img = document.createElement("img");
    img.setAttribute("src", "../../img/myOrders/Vector_delete.svg");
    img.setAttribute("alt", "Delete Button");

    button.appendChild(img);
    button.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMyOrdersPopup(e.currentTarget.parentElement, {
        message: "Are you sure you want to reject this order ?",
        code: data.code,
      });
    });
    status.appendChild(p);
    status.appendChild(button);
  }

  tr.appendChild(name);
  tr.appendChild(qty);
  tr.appendChild(price);
  tr.appendChild(orderDate);
  tr.appendChild(status);
  return tr;
}
