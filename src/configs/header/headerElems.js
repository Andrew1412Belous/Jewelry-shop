import { headerElemsNames } from '../elemNames/header/headerElemsNames'

export const headerElems = headerElemsNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
