import { addToBasket, getProduct } from '../../helpers'
import { favoriteTemplate} from '../../templates'

export function favoriteAddToBasketCallback (index, event) {
  const wrapper = this.section.querySelectorAll(
    '.favorite-product-info')[index]

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
