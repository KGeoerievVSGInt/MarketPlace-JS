import { contentPage } from "../pages/contentPage.js";
import { toggleHamburger } from "../utils/toggleFuncts/toggleHamburger.js";

const headersObj = {
  "/marketplace": "Marketplace",
  "/inventory": "Inventory",
  "/myOrders": "My Orders",
  "/pendingOrders": "Pending Orders",
};
export function createHeader(href) {
  const title = document.querySelector("title");
  title.textContent = headersObj[href];
  const header = document.createElement("header");
  const homeLink = document.createElement("a");
  homeLink.setAttribute("href", "/");
  homeLink.addEventListener("click", (e) => {
    if (e.target.tagName == "A") {
      e.preventDefault();
      contentPage(e.target.href);
    }
  });
  const homeImg = document.createElement("img");
  homeImg.setAttribute(
    "src",
    "../img/marketPage/vsg_marketplace-mini-logo 1.png"
  );
  homeImg.setAttribute("alt", "VSG Logo");
  homeImg.classList.add("homeLogo");

  homeLink.appendChild(homeImg);

  const p = document.createElement("p");
  p.classList.add("marketplace-header");
  p.textContent = headersObj[href];

  const userList = document.createElement("ul");

  const li1 = document.createElement("li");
  li1.textContent = "Hi,User";

  const li2 = document.createElement("li");

  const userImg = document.createElement("img");
  userImg.setAttribute("src", "../img/marketPage/Profile Img.png");
  userImg.setAttribute("alt", "User Logo");

  const hamburgerList = document.createElement("ul");
  hamburgerList.classList.add("hamburger-lines");

  for (let i = 0; i < 3; i++) {
    const line = document.createElement("li");
    line.classList.add("lines");
    hamburgerList.appendChild(line);
  }
  hamburgerList.addEventListener("click", toggleHamburger);

  li2.appendChild(userImg);
  userList.appendChild(li1);
  userList.appendChild(li2);

  header.appendChild(homeLink);
  header.appendChild(p);
  header.appendChild(userList);
  header.appendChild(hamburgerList);
  return header;
}
