export function getElemsById (names) {
  return Object.assign({}, ...names
    .map(id => ({ [id]: document.getElementById(id) })))
}
