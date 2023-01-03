import { filterElemNames } from '../elemNames/catalog/filterElemNames'

export const filterElems = filterElemNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
