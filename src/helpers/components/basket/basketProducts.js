export const basketProducts = sessionStorage.getItem('basket')
  ? JSON.parse(sessionStorage.getItem('basket'))
  : []
