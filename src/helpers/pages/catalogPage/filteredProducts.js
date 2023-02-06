export const filteredProducts = sessionStorage.getItem('filteredProducts')
  ? JSON.parse(sessionStorage.getItem('filteredProducts'))
  : []
