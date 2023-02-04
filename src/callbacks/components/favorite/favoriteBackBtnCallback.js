import { checkFavoriteProducts } from '../../../helpers/components/favorite/checkFavoriteProducts'
import { checkBasketProducts } from '../../../helpers'
import { setProductsParams } from '../../../helpers/components/setProductsParams'

export function favoriteBackBtnCallback (template) {
  if (document.title === 'Catalog') {
    setProductsParams(window[Symbol.for('catalog-products')])
  } else if (document.title === 'Product') {
    const product = require('../../../helpers/pages/productPage/currentProduct').currentProduct
    const otherProducts = document.querySelectorAll('product-card')

    setProductsParams(otherProducts)

    document.getElementById('favorite-btn').textContent = checkFavoriteProducts(product)
      ? 'Видалити з бажаного'
      : 'В бажане'

    document.getElementById('basket-btn').textContent = checkBasketProducts(product)
      ? 'В кошику'
      : 'Купити'
  }

  Object.assign(this.section, {
    style: `
      display: none;
    `,
    innerHTML: template,
  })

  window[Symbol.for('profile-comp')].dispatchEvent(new Event('open-profile'))
}
