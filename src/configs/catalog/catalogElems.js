import { catalogElemNames } from '../elemNames/catalog/catalogElemNames'

export const catalogElems = catalogElemNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
