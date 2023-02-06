const currentProduct = require('./currentProduct').currentProduct

const {
  favoriteBtnClickCallback,
  basketBtnClickCallback,
} = require('../../../callbacks/index')

export function productPageFunction () {
  require('./setProductPageParam').setProductPageParam()

  const currentFilters = JSON.parse(sessionStorage.getItem('currentFilters'))
  const productsWrapper = document.getElementById('products-wrapper')

  Object.assign(document.getElementById('favorite-btn'), {
    textContent: require('../../components/favorite/checkFavoriteProducts')
      .checkFavoriteProducts(currentProduct)
      ? 'Видалити з бажанного'
      : 'В бажане',
    onclick: favoriteBtnClickCallback,
  })

  Object.assign(document.getElementById('basket-btn'), {
    textContent: require('../../components/basket/checkBasketProducts')
      .checkBasketProducts(currentProduct)
      ? 'В кошику'
      : 'Купити',
    onclick: basketBtnClickCallback,
  })

  document.querySelector('.catalog-title')
    .onclick = function (event) {
      if (event.target.id === 'catalog-link') {
        require('../../../callbacks/pages/productPage/backLinkCallback').backLinkCallback()
      } else if (event.target.id === 'category-link') {
        require('../../../callbacks/pages/productPage/categoryLinkCallback').categoryLinkCallback()
      } else {
        require('../../../callbacks/pages/productPage/homeLinkCallback').homeLinkCallback()
      }
    }

  const otherProducts = JSON.parse(sessionStorage.getItem('products'))
    .filter(product => currentFilters.collection === product.filters.collection
      && JSON.stringify(currentFilters) !== JSON.stringify(product.filters))
    .sort(() => Math.round(Math.random() * 100) - 50)

  require('./showOtherProducts')
    .showOtherProducts(otherProducts, productsWrapper)
}
