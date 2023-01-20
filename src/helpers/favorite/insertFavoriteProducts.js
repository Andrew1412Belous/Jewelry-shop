import { favoriteProducts } from './favoriteProducts'
import { addElem } from '../DOM/addElem'

export function insertFavoriteProducts (container) {
  const wrapper = container.querySelector('.favorite-products-wrapper')

  favoriteProducts.length
    ? favoriteProducts
      .forEach(product => {
        const elem = Object.assign(addElem('div', wrapper), {
          className: 'favorite-product',
        })

        elem.innerHTML = `
        <div class="favorite-product-item">
            <div class="favorite-product-info" data-price="${product.price}">
                <img src="${product.picture}" alt="" class="product-icon">
                <div class="favorite-product-text-wrapper">
                    <div class="product-type">${product.type}</div>
                    <div class="product-brand-name">${product.brand}</div>
                    <div class="favorite-product-price product-price">${product.price.toLocaleString('ru-RU')} ₴</div>
                </div>
            </div>
            <div class="favorite-product-btns-wrapper">
                <button class="favorite-product-btn" id="delete-favorite">Видалити з бажанного</button>
                <button class="favorite-product-btn" id="add-basket-btn">Купити</button>
            </div>
        </div>
      `
      })
    : Object.assign(addElem('div', wrapper), {
      className: 'favorite-empty',
      textContent: 'Сподобався товар? Тисніть ♡, щоб не загубити!',
    })
}
