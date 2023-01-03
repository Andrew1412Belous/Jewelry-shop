import { orderFormElemNames } from '../elemNames/orderForm/orderFormElemNames'

export const orderFormElems = orderFormElemNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
