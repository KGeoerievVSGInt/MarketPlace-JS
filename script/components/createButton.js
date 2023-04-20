export function createButton(classes, text) {
  const button = document.createElement("button");
  button.classList.add(...classes);
  button.textContent = text;

  return button;
}
