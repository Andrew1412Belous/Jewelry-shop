export const orderHistoryProducts = sessionStorage.getItem('order-history')
  ? JSON.parse(sessionStorage.getItem('order-history'))
  : []
