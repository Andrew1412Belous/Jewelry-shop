export function showProducts (products, btn) {
  console.log(products)

  if (!products.length) {
    document.getElementById('product-message').innerText = 'Товарів за данними фільтрами нема'

    btn.style.display = 'none'
  } else if (products.length <= 6) {
    btn.style.display = 'none'

    for (let i = 0; i < products.length; i++) {
      products[i].classList.add('product-show')
      products[i].classList.remove('product-hide')
    }
  } else {
    btn.style.display = 'flex'

    for (let i = 0; i < 6; i++) {
      products[i].classList.add('product-show')
      products[i].classList.remove('product-hide')
    }
  }
}
