import { favoriteProducts } from './favoriteProducts'

export function checkFavoriteProducts (btn, currentProduct, page) {
  const lodash = require('lodash')

  const test = favoriteProducts
    .some(product => lodash.isEqual(product, currentProduct))

  if (page === 'catalog-page') {
    if (test) {
      btn.style.display = 'none'
    } else {
      btn.style.display = 'block'
    }
  } else if (test) {
    btn.textContent = 'Видалити з бажанного'
  } else {
    btn.textContent = 'Додати в бажане'
  }
}
