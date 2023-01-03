import { favoriteProducts } from './favoriteProducts'

export function checkFavoriteProducts (btn, currentProduct, page) {
  const test = favoriteProducts
    .some(product => JSON.stringify(product) === JSON.stringify(currentProduct))

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
