import { contentPage } from "./contentPage.js";

export function createHomePage() {
  const wrapper = document.querySelector(".wrapper");
  if (wrapper) {
    wrapper.remove();
  }
  const outerDiv = document.createElement("div");
  outerDiv.setAttribute("class", "container");

  const innerDiv = document.createElement("div");
  innerDiv.setAttribute("class", "logo-container");

  const img = document.createElement("img");
  img.setAttribute("id", "logo-image");
  img.setAttribute("src", "/img/main/vsg_marketplace_logo 2.png");
  img.setAttribute("alt", "VSG Marketplace Logo");

  const anchor = document.createElement("a");
  anchor.setAttribute("href", "/marketplace");
  anchor.textContent = "LOGIN";
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    contentPage(e.target.pathname);
  });
  innerDiv.appendChild(img);
  innerDiv.appendChild(anchor);

  outerDiv.appendChild(innerDiv);

  return outerDiv;
}
