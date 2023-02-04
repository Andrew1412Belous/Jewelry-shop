export function toggleDisplayElems(elems, mode) {
  for (const elem of elems) {
    elem.style.display = mode ? 'block' : 'none'
  }
}
