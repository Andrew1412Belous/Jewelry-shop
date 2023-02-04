export function updateCatalogFilters () {
  sessionStorage.removeItem('price')
  sessionStorage.removeItem('currentProduct')

  document.location.href = './catalog.html'
}
