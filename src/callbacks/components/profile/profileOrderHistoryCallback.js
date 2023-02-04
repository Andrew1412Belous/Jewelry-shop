import { profileTemplate } from '../../../templates'

export function profileOrderHistoryCallback (event) {
  Object.assign(this.section, {
    style: `
            display: none;
          `,
    innerHTML: profileTemplate,
  })

  window[Symbol.for('order-history-comp')].dispatchEvent(new Event('open-order-history'))
}
