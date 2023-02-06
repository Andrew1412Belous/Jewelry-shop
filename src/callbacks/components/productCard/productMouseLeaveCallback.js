const { setPriceType } = require('../../../helpers/index')

export function productMouseLeaveCallback (event) {
  if (event.target.textContent !== 'В кошику') {
    event.target.textContent = setPriceType(this.product.price)
  }
}
