import { catalogElems } from '../../configs/catalog/catalogElems'

export function showProducts (products) {
  if (!products.length) {
    document.getElementById('product-message').innerText = 'Товарів за данними фільтрами нема'

    catalogElems['show-more-btn'].style.display = 'none'
  } else if (products.length <= 6) {
    catalogElems['show-more-btn'].style.display = 'none'

    for (let i = 0; i < products.length; i++) {
      console.log(products)
      products[i].classList.add('product-show')
      products[i].classList.remove('product-hide')
    }
  } else {
    catalogElems['show-more-btn'].style.display = 'flex'

    for (let i = 0; i < 6; i++) {
      products[i].classList.add('product-show')
      products[i].classList.remove('product-hide')
    }
  }
}