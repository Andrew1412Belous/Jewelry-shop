export const currentUser = sessionStorage.getItem('currentUser')
  ? JSON.parse(sessionStorage.getItem('currentUser'))
  : {}
