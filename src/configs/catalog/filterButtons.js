import { filterBtnsElemNames } from '../elemNames/catalog/filterBtnsElemNames'

export const filterButtons = filterBtnsElemNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
