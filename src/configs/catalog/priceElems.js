import {priceElemNames} from '../elemNames/catalog/priceElemNames'

export const priceElems = priceElemNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
