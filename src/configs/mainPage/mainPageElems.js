import { mainPageElemNames } from '../elemNames/mainPage/mainPageElemNames'

export const mainPageElems = mainPageElemNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
