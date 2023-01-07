import { basketProducts } from '../basket/basketProducts'
import { addElem } from '../DOM/addElem'

export function insertOrderProducts (container) {
  const wrapper = container.querySelector('.order-products-basket')
  let total = 0

  basketProducts.forEach(product => {
    const elem = Object.assign(addElem('div', wrapper), {
      className: 'order-product',
    })

    const count = product.count ? product.count : 1

    elem.innerHTML = `
      <div class="order-product-info">
        <div class="product-brand-name">${product.brand} *${count}</div>
        <div class="product-type">${product.type}</div>
      </div>
      <div class="product-price">${(product.price * count).toLocaleString('ru-RU')} ₴</div>
    `

    total += product.price * count
  })

  container.querySelector('.order-total').textContent = `До сплати: ${total.toLocaleString('ru-RU')} ₴`
}
