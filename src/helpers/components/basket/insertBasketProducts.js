import { basketProducts } from './basketProducts'
import { addElem } from '../../DOM/addElem'
import { checkSameProductInBasket } from './checkSameProductInBasket'

export function insertBasketProducts (container) {
  const wrapper = container.querySelector('.basket-products-wrapper')

  if (basketProducts.length) {
    basketProducts
      .forEach(product => {
        const elem = Object.assign(addElem('div', wrapper), {
          className: 'basket-product',
        })

        elem.innerHTML = `
        <div class="basket-product-item">
            <div class="basket-product-info" data-price="${product.price}">
                <img src="${product.picture}" alt="" class="product-icon">
                <div class="basket-product-text-wrapper">
                    <div class="product-type">${product.type}</div>
                    <div class="product-brand-name">${product.brand}</div>
                    <div class="basket-product-price">${product.price.toLocaleString('ru-RU')} ₴</div>
                </div>
            </div>
            <div class="basket-product-btns-wrapper">
                <button class="basket-product-btn" id="delete-basket-product-btn">Видалити з кошика</button>
                <button class="basket-product-btn" id="show-product-page-btn">Переглянути товар</button>
                <div class="basket-count-wrapper">
                    <button class="basket-decr" id="basket-decr">-</button>
                    <div class="basket-count" id="basket-count">${checkSameProductInBasket(product)}</div>
                    <button class="basket-incr" id="basket-incr">+</button>
                </div>
            </div>
        </div>
      `
      })

    Object.assign(addElem('button', wrapper), {
      className: 'basket-product-btn',
      id: 'buy-all-products-btn',
      textContent: 'Оформити замовлення',
    })
  } else {
    wrapper.innerHTML = ''

    Object.assign(addElem('div', wrapper), {
      className: 'basket-empty',
      innerHTML: `
        <p>В кошику немає товарів<br>
        <span>У вас гарний смак.<br>А у нас багато цікавих та потрібних речей.</span></p>
      `,
    })
  }
}
