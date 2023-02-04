export function backLinkCallback () {
  sessionStorage.removeItem('filters')
  sessionStorage.removeItem('currentProduct')
  sessionStorage.removeItem('currentFilters')
  sessionStorage.removeItem('price')

  document.location = './catalog.html'
}
