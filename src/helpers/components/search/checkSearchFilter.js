const { searchFilters } = require('../../../configs/components/search/searchFilters')

export function checkSearchFilter (products) {
  const input = this.elems['search-input'].value.toLowerCase()
  const printedFilters = []
  let count = 0

  searchFilters
    .forEach(filter => {
      if (input.split(' ')
        .some(word => filter.every(key => key.indexOf(word) === -1))) {
        return
      }

      const result = filter.filter(item => input.indexOf(item.split('-')[0].toLowerCase()) !== -1)

      if (result.length === 1 && result.length < 2) printedFilters.push(result[0].split('-')[1])
      else if (result.length > 1) printedFilters.push(false)
    })

  if (printedFilters.every(filter => Boolean(filter)) && printedFilters.length) {
    for (let i = 0; i < products.length; i++) {
      const productFilters = []

      Object.keys(products[i].filters)
        .forEach(item => {
          if (item !== 'event' && item !== 'season' && item !== 'year') {
            if (Array.isArray(products[i].filters[item])) {
              products[i].filters[item]
                .forEach(key => {
                  if (printedFilters.some(filter => filter === key)) {
                    productFilters.push(key)
                  }
                })
            } else if (printedFilters.some(filter => filter === products[i].filters[item])) {
              productFilters.push(products[i].filters[item])
            }
          }
        })

      if (productFilters.length === printedFilters.length) {
        count++
      }
    }

    if (count) {
      const filters = printedFilters
        .map(filter => [`${filter}-checkbox`])

      sessionStorage.setItem('filters', JSON.stringify(filters))
    }
  } else {
    console.log('gg')
  }

  this.elems['search-message'].textContent = `Знайдено ${count} товарів`

  if (count > 0) {
    this.elems['search-submit-btn'].textContent = 'До товарів'
  }
}
