import { currentUser, getProduct, patchUser } from '../../helpers'
import { basketProducts } from '../../helpers/basket/basketProducts'

export function basketDecrBtnCallback (event) {
  const countElem = event.target.parentNode.querySelector('#basket-count')
  let countProducts = Number(countElem.textContent)

  const selectedProduct = Object.assign(getProduct(event.target.parentNode.parentNode.parentNode
    .querySelector('.basket-product-info')), {
    count: countProducts,
  })

  for (const product of basketProducts) {
    if (JSON.stringify(product) === JSON.stringify(selectedProduct)) {
      if (countProducts === 2) {
        delete product.count

        countProducts--
        event.target.disabled = true
      } else if (countProducts > 2) {
        Object.assign(product, {
          count: --countProducts,
        })
      }
    }
  }

  sessionStorage.setItem('basket', JSON.stringify(basketProducts))

  patchUser(currentUser.id, {
    basketProducts,
  })
    .then(response => {
      Object.assign(currentUser, response)

      sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
    })

  countElem.textContent = countProducts
}
