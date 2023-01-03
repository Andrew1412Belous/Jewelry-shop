export function cardCheckClickCallback (event) {
  this.elems['payment-form'].style.display = event.target.id === 'live'
    ? 'none'
    : 'flex'
}
