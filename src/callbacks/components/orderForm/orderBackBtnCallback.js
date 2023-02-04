import { checkBasketProducts } from '../../../helpers'
import { checkFavoriteProducts } from '../../../helpers/components/favorite/checkFavoriteProducts'

export function orderBackBtnCallback (template) {
  if (document.title === 'Catalog') {
    for (let i = 0; i < window[Symbol.for('catalog-products')].length; i++) {
      window[Symbol.for('catalog-products')][i]
        .setAttribute('favorite', checkFavoriteProducts(window[Symbol.for('catalog-products')][i].product))

      window[Symbol.for('catalog-products')][i]
        .setAttribute('basket', checkBasketProducts(window[Symbol.for('catalog-products')][i].product))
    }
  } else if (document.title === 'Product') {
    const product = require('../../../helpers/pages/productPage/currentProduct').currentProduct

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

  window[Symbol.for('basket-comp')].dispatchEvent(new Event('open-basket'))
}
