export function buyProductsCallback (template) {
  Object.assign(this.section, {
    style: `
      display: none;
    `,
    innerHTML: template,
  })

  window[Symbol.for('order-form-comp')].dispatchEvent(new Event('open-order-form'))
}
