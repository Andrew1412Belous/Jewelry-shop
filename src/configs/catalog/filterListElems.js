import { filterListElemNames } from '../elemNames/catalog/filterListElemNames'

export const filterListElems = filterListElemNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
