import { createButton } from "./createButton.js";
import { createInputDivs } from "./createInputDivs.js";
import { toggleInventoryModalAdd } from "../utils/toggleFuncts/toggleInventoryModal.js";
import { toggleInventoryModalDropdown } from "../utils/toggleFuncts/toggleInventoryModalDropdown.js";
import { contentLoadPage } from "../pages/contentLoadPage.js";
// import { post, put } from "../utils/fetcher.js";
import { postNewItem } from "../utils/toggleFuncts/postRequest.js";
import { editItem } from "../utils/fetchers/putRequest.js";

export function createInventoryDetailsModal(type, data) {
  let imageFile;
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const itemManagement = document.createElement("div");
  itemManagement.classList.add("item-management");

  const itemData = document.createElement("form");
  itemData.classList.add("item-data");

  const itemDataForm = document.createElement("div");
  itemDataForm.classList.add("item-data-form");

  const itemDataFormLeft = document.createElement("div");
  itemDataFormLeft.classList.add("item-data-form-left");

  const modalHeader = document.createElement("p");
  modalHeader.classList.add("modal-header");
  modalHeader.textContent = type == "add" ? "Add New Item" : "Modify Item";

  const codeDiv = createInputDivs(
    "code",
    "text",
    "Code *",
    data ? data.code : null,
    "code"
  );

  const nameDiv = createInputDivs(
    "name",
    "text",
    "Name *",
    data ? data.name : null,
    "name"
  );

  const descriptionDiv = document.createElement("div");

  const textArea = document.createElement("textarea");
  textArea.setAttribute("id", "item-description-area");
  textArea.setAttribute("placeholder", " ");
  textArea.setAttribute("cols", "40");
  textArea.setAttribute("rows", "6");
  textArea.setAttribute("name", "description");
  textArea.value = data ? data.description : "";

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "item-description-area");
  descriptionLabel.textContent = "Description";

  descriptionDiv.appendChild(textArea);
  descriptionDiv.appendChild(descriptionLabel);

  const categoryDropdown = document.createElement("div");
  categoryDropdown.classList.add("category-dropdown");

  const categoryButton = document.createElement("button");

  const dropdownSpan = document.createElement("span");
  dropdownSpan.textContent = type == "edit" ? data.category : "Category *";
  if (type == "edit") {
    dropdownSpan.classList.add("selected");
  }

  const droptdownSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  droptdownSvg.setAttribute("width", "10");
  droptdownSvg.setAttribute("height", "4");
  droptdownSvg.setAttribute("viewBox", "0 0 10 4");

  const droptdownSvgPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  droptdownSvgPath.setAttribute("d", "M5 4L0.669872 0.25L9.33013 0.25L5 4Z");
  droptdownSvgPath.setAttribute("fill", "#9a9a9a");

  droptdownSvg.appendChild(droptdownSvgPath);

  categoryButton.appendChild(dropdownSpan);
  categoryButton.appendChild(droptdownSvg);

  categoryButton.addEventListener("click", toggleInventoryModalDropdown);

  const dropdownChild = document.createElement("ul");
  dropdownChild.classList.add("category-dropdown-child");

  const option1 = document.createElement("li");
  option1.classList.add("category-option");
  option1.textContent = "Laptops";

  const option2 = document.createElement("li");
  option2.classList.add("category-option");
  option2.textContent = "Furniture";

  const option3 = document.createElement("li");
  option3.classList.add("category-option");
  option3.textContent = "Office Tools";

  const option4 = document.createElement("li");
  option4.classList.add("category-option");
  option4.textContent = "Misc";

  dropdownChild.appendChild(option1);
  dropdownChild.appendChild(option2);
  dropdownChild.appendChild(option3);
  dropdownChild.appendChild(option4);
  dropdownChild.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      e.preventDefault();
      dropdownSpan.textContent = e.target.textContent;
      if (!dropdownChild.classList.contains("selected")) {
        dropdownSpan.classList.add("selected");
      }
      toggleInventoryModalDropdown(e);
    }
  });
  categoryDropdown.appendChild(categoryButton);
  categoryDropdown.appendChild(dropdownChild);

  const forSaleDiv = createInputDivs(
    "qty-for-sale",
    "number",
    "Qty For Sale",
    data ? data.quantityForSale : null,
    "quantityForSale"
  );

  const priceDiv = createInputDivs(
    "sale-price",
    "number",
    "Sale Price",
    data ? data.price : null,
    "price"
  );

  const qtyDiv = createInputDivs(
    "qty",
    "number",
    "Qty *",
    data ? data.quantity : null,
    "quantity"
  );

  itemDataFormLeft.appendChild(modalHeader);
  itemDataFormLeft.appendChild(codeDiv);
  itemDataFormLeft.appendChild(nameDiv);
  itemDataFormLeft.appendChild(descriptionDiv);
  itemDataFormLeft.appendChild(categoryDropdown);
  itemDataFormLeft.appendChild(forSaleDiv);
  itemDataFormLeft.appendChild(priceDiv);
  itemDataFormLeft.appendChild(qtyDiv);

  const itemDataFormRight = document.createElement("div");
  itemDataFormRight.classList.add("item-data-form-right");

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    data ? data.imageURL : "../img/inventory/no_image-placeholder.png"
  );
  img.setAttribute("alt", "New Item Image");

  const buttonsDiv = document.createElement("div");

  const uploadBtn = createButton(["button", "button-warning"], "Upload");
  const uploadlink = document.createElement("input");
  uploadlink.classList.add("button-hidden");
  uploadlink.setAttribute("type", "file");
  uploadlink.setAttribute("accept", "image/jpeg, image/png, image/jpg");
  uploadlink.addEventListener("change", () => {
    imageFile = uploadlink.files[0];
    img.src = URL.createObjectURL(imageFile);
  });
  uploadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    uploadlink.click();
  });
  const removeBtn = createButton(["button", "button-remove"], "Remove");
  buttonsDiv.appendChild(uploadBtn);
  buttonsDiv.appendChild(removeBtn);

  itemDataFormRight.appendChild(img);
  itemDataFormRight.appendChild(buttonsDiv);

  itemDataForm.appendChild(itemDataFormLeft);
  itemDataForm.appendChild(itemDataFormRight);

  const itemDataButtonContainer = document.createElement("div");
  itemDataButtonContainer.classList.add("item-data-button-container");

  const addBtn = createButton(["button", "button-success"], "Add");
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(itemData);
    const checkObj = Object.fromEntries(formData);
    if (imageFile) {
      formData.append("image", uploadlink.files[0], "filename");
    }
    if (
      checkObj.code != "" &&
      checkObj.name != "" &&
      checkObj.qty != "" &&
      dropdownSpan.textContent != "Category *"
    ) {
      formData.append("category", dropdownSpan.textContent);
      if (type == "add") {
        postNewItem(formData, false);
        // post(formData, undefined, "/Inventory/AddItem");
      } else {
        // put(formData, `/${checkObj.code}`, "/Inventory/Modify");
        editItem(formData, checkObj.code, false);
      }
      toggleInventoryModalAdd();
      contentLoadPage("/inventory");
    } else {
      console.log("empty required fields");
    }
  });
  itemDataButtonContainer.appendChild(addBtn);

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-button");
  const closeImg = document.createElement("img");
  closeImg.setAttribute("src", "../../img/marketPage/Vector_close.svg");
  closeImg.setAttribute("alt", "Close Edit Modal");
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleInventoryModalAdd();
  });

  closeBtn.appendChild(closeImg);

  itemData.appendChild(itemDataForm);
  itemData.appendChild(itemDataButtonContainer);
  itemData.appendChild(closeBtn);
  itemManagement.appendChild(itemData);
  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");

  modal.appendChild(itemManagement);
  modal.appendChild(backdrop);
  return modal;
}
