// import lodash from 'lodash'
import { checkFavoriteProducts } from '../../helpers/components/favorite/checkFavoriteProducts'
import { checkBasketProducts } from '../../helpers'
import { loginValidation } from '../../configs'

export function hideFavoriteComp (template) {
  loginValidation

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
