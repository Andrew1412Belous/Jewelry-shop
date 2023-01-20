export function setMoreProductsBtnMode (products, btn) {
  console.log(products)

  let numbersOfVisibleProducts = document.getElementsByClassName('product-show').length

  if (numbersOfVisibleProducts + 6 >= products.length) {
    for (let i = numbersOfVisibleProducts; i < products.length; i++) {
      products[i].classList.add('product-show')
      products[i].classList.remove('product-hide')
    }
    numbersOfVisibleProducts = products.length
    btn.style.display = 'none'
  } else {
    for (let i = numbersOfVisibleProducts; i < numbersOfVisibleProducts + 6; i++) {
      products[i].classList.add('product-show')
      products[i].classList.remove('product-hide')
    }

    numbersOfVisibleProducts += 6
  }
}
