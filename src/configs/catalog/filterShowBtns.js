import {filtersShowButtonNames} from '../elemNames/catalog/filtersShowButtonNames'

export const filterShowBtns = filtersShowButtonNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
