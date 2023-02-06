const currentProduct = require('./currentProduct').currentProduct

export function setProductPageParam () {
  document.querySelector('.catalog-title div').innerText = `${currentProduct.type} ${currentProduct.brand}`
  document.getElementById('product-title').innerText = `${currentProduct.type} ${currentProduct.brand}`
  document.getElementById('product-subtitle-type').innerText = `Категорія: ${currentProduct.type}`
  document.getElementById('product-subtitle-brand').innerText = `Бренд: ${currentProduct.brand}`
  document.getElementById('product-price').innerText = require('../../components/setPriceType')
    .setPriceType(currentProduct.price)
  document.getElementById('product-icon').src = currentProduct.picture
}
