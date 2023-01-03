import { filterClearButtonNames } from '../elemNames/catalog/filterClearButtonNames'

export const filterClearBtns = filterClearButtonNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
