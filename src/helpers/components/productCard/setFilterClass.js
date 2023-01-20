export function setFilterClass () {
  let filtersClass = ''

  for (const filter in this.product.filters) {
    if (Array.isArray(this.product.filters[filter])) {
      for (const item of this.product.filters[filter]) {
        filtersClass += `${item} `
      }
    } else {
      filtersClass += `${this.product.filters[filter]} `
    }
  }

  filtersClass += 'product-hide'

  this.className = filtersClass
}
