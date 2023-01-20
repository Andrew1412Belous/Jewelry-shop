export const currentProduct = sessionStorage.getItem('currentProduct')
  ? JSON.parse(sessionStorage.getItem('currentProduct'))
  : {}
