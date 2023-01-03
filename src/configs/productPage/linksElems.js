import { linksElemNames } from '../elemNames/productPage/linksElemNames'

export const linksElems = linksElemNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
