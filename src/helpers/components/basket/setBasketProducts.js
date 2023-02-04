import { basketProducts } from './basketProducts'
import { checkBasketProducts } from './checkBasketProducts'
import { getProduct } from '../../pages/catalogPage/getProduct'
import { products } from '../../../configs'
import { currentProduct } from '../../pages/productPage/currentProduct'

export function setBasketProducts (user) {
  if (user.basketProducts) {
    sessionStorage.setItem('basket', JSON.stringify(user.basketProducts))
    user.basketProducts.forEach(product => basketProducts.push(product))

    if (document.title === 'Catalog') {
      document.querySelectorAll('#product-btn')
        .forEach((btn, index) => {
          checkBasketProducts(btn, getProduct(products[index]), 'catalog-page')
        })
    } else if (document.title === 'Product') {
      checkBasketProducts(document.getElementById('basket-btn'), currentProduct, 'product-page')
    }
  }
}
