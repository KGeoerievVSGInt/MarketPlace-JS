import { createMarketDetailsModal } from "../../components/createMarketDetailsModal.js";
import { getSingleItem } from "../getSingleItem.js";

export function toggleMarketModal(e, id) {
  e.preventDefault();
  const main = document.querySelector("main");
  let modal = document.querySelector(".modal");
  if (modal == null) {
    getSingleItem(id).then((data) => {
      modal = createMarketDetailsModal(data);
      main.classList.add("main-hidden");
      main.appendChild(modal);
    });
  } else {
    main.classList.remove("main-hidden");
    const backdrop = document.querySelector(".backdrop");
    backdrop.classList.add("out");
    document.querySelector(".modal-content").classList.add("modal-out");
    backdrop.addEventListener("animationend", () => {
      modal.remove();
    });
  }
}
