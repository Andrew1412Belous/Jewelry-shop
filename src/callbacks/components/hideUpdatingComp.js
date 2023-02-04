import { hideComponentCallback } from './hideComponentCallback'

const setProductsParams = require('../../helpers/components/setProductsParams').setProductsParams

export function hideUpdatingComp (template) {
  if (document.title === 'Catalog') {
    setProductsParams(window[Symbol.for('catalog-products')])
  } else if (document.title === 'Product') {
    setProductsParams(document.querySelectorAll('product-card'))
  }

  hideComponentCallback.bind(this, template)()
}
