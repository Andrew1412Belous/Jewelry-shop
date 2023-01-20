// import lodash from 'lodash'
import { checkFavoriteProducts } from '../../helpers/favorite/checkFavoriteProducts'
import { checkBasketProducts } from '../../helpers'

export function hideFavoriteComp (template) {
  for (let i = 0; i < window[Symbol.for('catalog-products')].length; i++) {
    console.log(checkFavoriteProducts(window[Symbol.for('catalog-products')][i].product))

    window[Symbol.for('catalog-products')][i]
      .setAttribute('favorite', checkFavoriteProducts(window[Symbol.for('catalog-products')][i].product))

    window[Symbol.for('catalog-products')][i]
      .setAttribute('basket', checkBasketProducts(window[Symbol.for('catalog-products')][i].product))
  }

  Object.assign(this.section, {
    style: `
      display: none;
    `,
    innerHTML: template,
  })

  document.body.style.overflow = ''
}
