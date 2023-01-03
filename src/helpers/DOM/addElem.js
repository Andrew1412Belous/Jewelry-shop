export function addElem (tagName, container = document.body) {
  return container.appendChild(document.createElement(tagName))
}
