const {
  updateCatalogFilters,
  checkSearchFilter,
} = require('../../../helpers/index')

export async function searchSubmitBtnCallback (event) {
  if (event.target.textContent === 'До товарів') updateCatalogFilters()
  else if (this.elems['search-input'].value) {
    sessionStorage.getItem('products')
      ? checkSearchFilter.bind(this)(JSON.parse(sessionStorage.getItem('products')))
      : await require('../../../helpers/index').getAllProducts()
        .then(response => {
          checkSearchFilter.bind(this)(response)

          sessionStorage.setItem('products', JSON.stringify(response))
        })
  } else {
    this.elems['search-message'].textContent = 'Заповніть поле для пошуку'
  }
}
