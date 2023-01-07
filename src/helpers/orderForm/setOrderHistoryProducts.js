import { orderHistoryProducts } from './orderHistoryProducts'

export function setOrderHistoryProducts (user) {
  if (user.orderHistoryProducts) {
    sessionStorage.setItem('order-history', JSON.stringify(user.orderHistoryProducts))

    user.orderHistoryProducts
      .forEach(order => orderHistoryProducts.push(order))
  }
}
