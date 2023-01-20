import { ProductCard } from '../../components/catalog/productCard'
import { checkFavoriteProducts } from '../favorite/checkFavoriteProducts'
import { checkBasketProducts } from '../basket/checkBasketProducts'

export function insertCatalogProducts (productsSource, wrapper) {
  for (let i = 0; i < productsSource.length; i++) {
    const product = Object.assign(new ProductCard(), {
      className: 'product-hide',
    })

    wrapper.appendChild(product)

    product.setAttribute('type', product[i].type)
    product.setAttribute('brand', product[i].brand)
    product.setAttribute('price', product[i].price)
    product.setAttribute('image', product[i].picture)
    product.setAttribute('favorite', checkFavoriteProducts(product[i]))
    product.setAttribute('basket', checkBasketProducts(product[i]))
    product.setAttribute('number', `${i}`)
  }
}
