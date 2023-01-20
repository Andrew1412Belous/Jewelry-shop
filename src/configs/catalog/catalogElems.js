import { catalogElemNames } from '../elemNames/catalog/catalogElemNames'

export const catalogElems = ['show-more-btn']
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
