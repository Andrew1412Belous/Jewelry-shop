const filteredProducts = require('./filteredProducts').filteredProducts

export function sortByFilters (filters, products, btn) {
  require('./hideProducts').hideProducts(products)

  for (let i = 0; i < products.length; i++) {
    const test = filters
      .every(category => category
        .some(filter => products[i].classList.contains(filter)))

    if (test) {
      filteredProducts.push(products[i])
    }
  }

  require('./showProducts').showProducts(filteredProducts, btn)
}
