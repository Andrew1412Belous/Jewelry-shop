export function homeLinkCallback () {
  document.location = './index.html'

  sessionStorage.removeItem('currentProduct')
  sessionStorage.removeItem('currentFilters')
  sessionStorage.removeItem('filters')
  sessionStorage.removeItem('price')
}
