export function productPriceCallback () {
  sessionStorage.setItem('currentProduct', JSON.stringify(require('../../../helpers/components/getProduct')
    .getProduct.bind(this, this.section)()))
  sessionStorage.setItem('currentFilters', JSON.stringify(this.product.filters))

  document.location.href = './product-page.html'
}
