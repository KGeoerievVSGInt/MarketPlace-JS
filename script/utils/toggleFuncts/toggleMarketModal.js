import { createMarketDetailsModal } from "../../components/createMarketDetailsModal.js";

export function toggleMarketModal(e, data) {
  e.preventDefault();
  const main = document.querySelector("main");
  let modal = document.querySelector(".modal");
  main.style.overflow = main.style.overflow == "hidden" ? "auto" : "hidden";
  if (modal == null) {
    modal = createMarketDetailsModal(data);
    main.appendChild(modal);
  } else {
    modal.remove();
  }
}
