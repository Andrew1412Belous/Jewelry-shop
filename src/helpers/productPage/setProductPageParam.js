import { currentProduct } from './currentProduct'

export function setProductPageParam () {
  document.querySelector('.catalog-title div').innerText = `${currentProduct.type} ${currentProduct.brand}`
  document.getElementById('product-title').innerText = `${currentProduct.type} ${currentProduct.brand}`
  document.getElementById('product-subtitle-type').innerText = `Категорія: ${currentProduct.type}`
  document.getElementById('product-subtitle-brand').innerText = `Бренд: ${currentProduct.brand}`
  document.getElementById('product-price').innerText = `${currentProduct.price.toLocaleString('ru-RU')} ₴`
  document.getElementById('product-icon').src = currentProduct.picture
}
