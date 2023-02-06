const { getProduct } = require('../../../helpers/index')

export function showProductPageCallback (event) {
  const selectedProduct = getProduct.bind(this, event.target.parentNode.parentNode
    .querySelector('.basket-product-info'))()

  sessionStorage.setItem('currentProduct', JSON.stringify(selectedProduct))

  document.location = './product-page.html'
}
