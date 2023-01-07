import { currentUser, putUser } from '../../helpers'
import { orderHistoryProducts } from '../../helpers/orderForm/orderHistoryProducts'
import { basketProducts } from '../../helpers/basket/basketProducts'
import { checkCorrectInput } from '../../helpers/orderForm/checkCorrectInput'
import { stringWithoutSpacesRegExp } from '../../configs/regExp/stringWithoutSpacesRegExp'

export function buyAllProductsBtnCallback (event) {
  const test = checkCorrectInput(this.elems)
  const products = []
  const totalPrice = parseInt(this.section
    .querySelector('.order-total')
    .textContent.slice(11).replace(stringWithoutSpacesRegExp, ''), 10)

  this.section.querySelectorAll('.order-product')
    .forEach(product => {
      const res = {}

      Object.assign(res, {
        brand: product.querySelector('.product-brand-name').textContent,
        type: product.querySelector('.product-type').textContent,
        price: parseInt(product
          .querySelector('.product-price')
          .textContent.replace(stringWithoutSpacesRegExp, ''), 10),
      })

      products.push(res)
    })

  if (test) {
    Object.assign(event.target.style, {
      color: '#50a450',
      border: '1px solid #50a450',
    })

    if (currentUser.orderHistoryProducts) {
      console.log(10)

      orderHistoryProducts.push({
        'order-number': orderHistoryProducts.length + 1,
        total: totalPrice,
        products,
      })
    } else {
      orderHistoryProducts.push({
        'order-number': 1,
        total: totalPrice,
        products,
      })

      console.log(20)
    }

    sessionStorage.setItem('order-history', JSON.stringify(orderHistoryProducts))

    Object.assign(currentUser, { orderHistoryProducts })
    delete currentUser.basketProducts

    putUser(currentUser.id, currentUser)
      .then(response => {
        sessionStorage.setItem('currentUser', JSON.stringify(response))
        sessionStorage.removeItem('basket')

        basketProducts.splice(0, basketProducts.length)
      })

    this.section.querySelector('.order-wrapper').innerHTML = `
      <div class="order-done">Замовлення успішно оформлено</div>
    `
  } else {
    Object.assign(event.target.style, {
      color: '#ea3838',
      border: '1px solid #ea3838',
    })
  }
}
