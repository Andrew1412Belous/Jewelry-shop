import { setPriceType } from '../../../helpers/components/setPriceType'

export function productMouseLeaveCallback (event) {
  if (event.target.textContent !== 'В кошику') {
    event.target.textContent = setPriceType(this.product.price)
  }
}
