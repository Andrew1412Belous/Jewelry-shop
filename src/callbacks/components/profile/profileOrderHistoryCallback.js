export function profileOrderHistoryCallback (template) {
  Object.assign(this.section, {
    style: `
            display: none;
          `,
    innerHTML: template,
  })

  window[Symbol.for('order-history-comp')].dispatchEvent(new Event('open-order-history'))
}
