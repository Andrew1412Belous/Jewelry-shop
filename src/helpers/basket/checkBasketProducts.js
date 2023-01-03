import { basketProducts } from './basketProducts'

export function checkBasketProducts (btn, currentProduct, page) {
  const products = basketProducts.map(product => {
    const res = {}

    for (const key in product) {
      if (key !== 'count') {
        Object.assign(res, { [key]: product[key] })
      }
    }

    return res
  })

  const test = products
    .some(product => JSON.stringify(product) === JSON.stringify(currentProduct))

  if (page === 'catalog-page') {
    if (test) {
      btn.textContent = 'В кошику'

      btn.onmouseenter = function () {}
      btn.onmouseleave = function () {}
    } else {
      btn.textContent = `${currentProduct.price.toLocaleString('ru-RU')} ₴`

      btn.onmouseenter = function (event) {
        event.target.textContent = 'Переглянути'
      }

      btn.onmouseleave = function (event) {
        event.target.textContent = `${currentProduct.price.toLocaleString('ru-RU')} ₴`
      }
    }
  } else if (test) {
    btn.textContent = 'В кошику'
  } else {
    btn.textContent = 'Купити'
  }
}
