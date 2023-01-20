import {
  filterButtons,
  filterBtnsElemNames,
  filterShowBtns,
  filtersShowButtonNames,
  filterClearButtonNames,
  filterClearBtns,
  priceElemNames,
  priceElems,
} from '../../configs'

import {
  filterButtonCallback,
  filterClearBtnCallback,
  filterPriceInputCallback,
  filterShowBtnCallback,
  showMoreProductsBtnCallback,
} from '../../callbacks'

import { checkFavoriteProducts } from '../favorite/checkFavoriteProducts'
import { checkBasketProducts } from '../basket/checkBasketProducts'
import { getAllProducts } from '../fetch/getAllProducts'
import { ProductCard } from '../../components/catalog/productCard'
import { checkFilters } from '../catalog/checkFilters'

export async function catalogPageCallback () {
  const showMoreBtn = document.getElementById('show-more-btn')
  const wrapper = document.querySelector('.products-wrapper')
  const products = []

  await getAllProducts()
    .then(response => {
      for (let i = 0; i < response.length; i++) {
        const product = new ProductCard(response[i])

        wrapper.appendChild(product)

        product.setAttribute('favorite', checkFavoriteProducts(response[i]))
        product.setAttribute('basket', checkBasketProducts(response[i]))
        product.setAttribute('data-price', response[i].price)

        products.push(product)
      }

      sessionStorage.setItem('products', JSON.stringify(products))
    })

  checkFilters(products, showMoreBtn)

  window[Symbol.for('catalog-products')] = document
    .querySelectorAll('product-card')

  priceElemNames.forEach(input => {
    priceElems[input].oninput = filterPriceInputCallback
  })

  filterBtnsElemNames.forEach(btn => {
    filterButtons[btn].onclick = filterButtonCallback
  })

  filtersShowButtonNames
    .forEach(button => {
      filterShowBtns[button].onclick = filterShowBtnCallback.bind(this, products, showMoreBtn)
    })

  filterClearButtonNames
    .forEach(button => {
      filterClearBtns[button].onclick = filterClearBtnCallback
    })

  document.getElementById('show-more-btn').onclick = showMoreProductsBtnCallback.bind(this, products)
}
