export const favoriteProducts = sessionStorage.getItem('favorite')
  ? JSON.parse(sessionStorage.getItem('favorite'))
  : []
