const filteredProducts = require('./filteredProducts').filteredProducts
const setPriceFilter = require('./setPriceFilter').setPriceFilter

export function sortByPriceAndFilters (filters, products, btn) {
  require('./hideProducts').hideProducts(products)

  for (let i = 0; i < products.length; i++) {
    const test = filters
      .every(category => category
        .some(filter => products[i].classList.contains(filter)) && setPriceFilter(products[i]))

    console.log(test)
    if (test) {
      filteredProducts.push(products[i])
    }
  }

  require('./showProducts').showProducts(filteredProducts, btn)
}
