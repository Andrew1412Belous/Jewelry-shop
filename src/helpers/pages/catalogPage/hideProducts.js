export function hideProducts (products) {
  for (let i = 0; i < products.length; i++) {
    products[i].classList.remove('product-show')
    products[i].classList.add('product-hide')
  }
}
