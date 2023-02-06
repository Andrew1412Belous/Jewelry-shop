const { hideComponentCallback } = require('./hideComponentCallback')
const { setProductsParams } = require('../../helpers/index')

export function hideUpdatingComp (template) {
  if (document.title === 'Catalog') {
    setProductsParams(window[Symbol.for('catalog-products')])
  } else if (document.title === 'Product') {
    setProductsParams(document.querySelectorAll('product-card'))
  }

  hideComponentCallback.bind(this, template)()
}
