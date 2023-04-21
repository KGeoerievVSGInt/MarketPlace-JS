import { createHeader } from "../components/createHeader.js";
import { createNav } from "../components/createNav.js";
import { contentLoadPage } from "./contentLoadPage.js";
import { createHomePage } from "./createHomePage.js";

export function contentPage(href) {
  const body = document.querySelector("body");
  const innerDiv = body.querySelector("div");
  if (innerDiv != null) {
    innerDiv.remove();
  }
  if (href == "/") {
    body.appendChild(createHomePage());
  } else {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    wrapper.appendChild(createHeader(href));

    const content = document.createElement("div");
    content.classList.add("content");

    wrapper.appendChild(content);
    content.appendChild(createNav(href));
    body.appendChild(wrapper);
    contentLoadPage(href);
  }

  history.pushState({}, "", href);
}
