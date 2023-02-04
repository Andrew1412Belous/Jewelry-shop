export function productMouseEnterCallback (event) {
  if (event.target.textContent !== 'В кошику') {
    event.target.textContent = 'Переглянути'
  }
}
