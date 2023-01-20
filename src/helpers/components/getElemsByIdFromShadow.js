export function getElemsByIdFromShadow (names) {
  const shadow = this.shadow

  return Object.assign({}, ...names
    .map(id => ({ [id]: shadow.querySelector(`#${id}`) })))
}
