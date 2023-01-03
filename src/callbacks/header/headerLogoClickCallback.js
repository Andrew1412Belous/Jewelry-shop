export function headerLogoClickCallback () {
  document.location = './index.html'

  sessionStorage.removeItem('currentProduct')
  sessionStorage.removeItem('filters')
  sessionStorage.removeItem('price')
}
