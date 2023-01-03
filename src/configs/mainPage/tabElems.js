import {tabElemNames} from '../elemNames/mainPage/tabElemNames'

export const tabElems = tabElemNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
