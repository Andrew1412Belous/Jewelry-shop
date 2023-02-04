export function buyProductsCallback () {
  window[Symbol.for('order-form-comp')].dispatchEvent(new Event('open-order-form'))

  this.section.style.display = 'none'
}
