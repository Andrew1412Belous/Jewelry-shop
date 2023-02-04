import {
  addToBasket,
  getProduct,
} from '../../../helpers'

import { favoriteTemplate } from '../../../templates'

export function favoriteAddToBasketCallback (event) {
  const wrapper = event.target.parentNode.parentNode.querySelector('.favorite-product-info')

  if (event.target.textContent === 'Купити') {
    addToBasket(getProduct.bind(wrapper, wrapper)())

    event.target.textContent = 'В кошику'
  } else {
    Object.assign(this.section, {
      style: `
            display: none;
          `,
      innerHTML: favoriteTemplate,
    })

    window[Symbol.for('basket-comp')].dispatchEvent(new Event('open-basket'))
  }
}
