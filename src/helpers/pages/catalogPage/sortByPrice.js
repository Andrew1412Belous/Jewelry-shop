const filteredProducts = require('./filteredProducts').filteredProducts
const setPriceFilter = require('./setPriceFilter').setPriceFilter

export function sortByPrice (products, btn) {
  require('./hideProducts').hideProducts(products)

  for (let i = 0; i < products.length; i++) {
    const test = setPriceFilter(products[i])

    if (test) {
      filteredProducts.push(products[i])
    }
  }

  require('./showProducts').showProducts(filteredProducts, btn)
}
