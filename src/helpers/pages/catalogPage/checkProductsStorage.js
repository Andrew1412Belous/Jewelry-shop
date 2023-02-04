const { createProductCards } = require('./createProductCards')

export async function checkProductsStorage (wrapper, productCards) {
  if (sessionStorage.getItem('products')) {
    createProductCards(JSON.parse(sessionStorage.getItem('products')), wrapper, productCards)
  } else {
    await require('../../fetch/getAllProducts').getAllProducts()
      .then(response => {
        createProductCards(response, wrapper, productCards)

        sessionStorage.setItem('products', JSON.stringify(response))
      })
  }
}
