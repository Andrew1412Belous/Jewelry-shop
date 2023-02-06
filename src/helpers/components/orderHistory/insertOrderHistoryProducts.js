const orderHistoryProducts = require('./orderHistoryProducts').orderHistoryProducts
const addElem = require('../../DOM/addElem').addElem

export function insertOrderHistoryProducts (container) {
  const productsWrapper = container.querySelector('.order-history-wrapper')

  if (orderHistoryProducts.length) {
    orderHistoryProducts
      .forEach(order => {
        const orderInfo = Object.assign(addElem('div', productsWrapper), {
          className: 'order-info',
        })

        orderInfo.innerHTML = `
          <div class="order-number">Замовлення №${order['order-number']}</div>
          <div class="order-details">
            <div class="order-products"></div>
            <div class="order-total-price">${order.total.toLocaleString('ru-RU')} ₴</div>
          </div>
        `

        const productsList = orderInfo.querySelector('.order-products')

        order.products
          .forEach(product => {
            const item = Object.assign(addElem('div', productsList), {
              className: 'order-product',
            })

            item.innerHTML = `
                <div class="product-type">${product.type}</div>
                <div class="product-brand-name">${product.brand}</div>
                <div class="product-price">${product.price.toLocaleString('ru-RU')} ₴</div>
            `
          })
      })
  } else {
    productsWrapper.innerHTML = `
      <div class="order-empty">Замовлень поки що немає</div>
    `
  }
}
