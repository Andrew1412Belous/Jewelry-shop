import { addToBasket } from '../../../helpers'
import { currentProduct } from '../../../helpers/pages/productPage/currentProduct'

export function basketBtnClickCallback (event) {
  if (sessionStorage.getItem('currentUser')) {
    if (event.target.textContent === 'В кошику') {
      window[Symbol.for('basket-comp')].dispatchEvent(new Event('open-basket'))
    } else {
      addToBasket(currentProduct)

      event.target.textContent = 'В кошику'
    }
  } else {
    window[Symbol.for('sign-up')].dispatchEvent(new Event('open-reg-form'))
  }
}
