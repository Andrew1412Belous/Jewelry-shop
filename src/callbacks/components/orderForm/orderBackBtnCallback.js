import { setProductsParams } from '../../../helpers/components/setProductsParams'

export function orderBackBtnCallback (template) {
  if (document.title === 'Catalog') {
    setProductsParams(window[Symbol.for('catalog-products')])
  } else if (document.title === 'Product') {
    setProductsParams(document.querySelectorAll('product-card'))
  }

  Object.assign(this.section, {
    style: `
      display: none;
    `,
    innerHTML: template,
  })

  window[Symbol.for('basket-comp')].dispatchEvent(new Event('open-basket'))
}
