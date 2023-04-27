export function createInputDivs(id, type, text, data, name) {
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.setAttribute("id", id);
  input.setAttribute("type", type);
  input.setAttribute("placeholder", " ");
  input.setAttribute("name", name);
  if (data !== null) {
    input.value = data;
  }

  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = text;

  div.appendChild(input);
  div.appendChild(label);
  return div;
}
