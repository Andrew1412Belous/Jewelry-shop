const currentProduct = require('../../../helpers/pages/productPage/currentProduct').currentProduct

export function productPageCallback () {
  require('../../../helpers/pages/productPage/setProductPageParam').setProductPageParam()

  const currentFilters = JSON.parse(sessionStorage.getItem('currentFilters'))
  const productsWrapper = document.getElementById('products-wrapper')

  Object.assign(document.getElementById('favorite-btn'), {
    textContent: require('../../../helpers/components/favorite/checkFavoriteProducts')
      .checkFavoriteProducts(currentProduct)
      ? 'Видалити з бажанного'
      : 'В бажане',
    onclick: require('./favoriteBtnClickCallback').favoriteBtnClickCallback,
  })

  Object.assign(document.getElementById('basket-btn'), {
    textContent: require('../../../helpers/components/basket/checkBasketProducts')
      .checkBasketProducts(currentProduct)
      ? 'В кошику'
      : 'Купити',
    onclick: require('./basketBtnClickCallback').basketBtnClickCallback,
  })

  document.querySelector('.catalog-title')
    .onclick = function (event) {
      if (event.target.id === 'catalog-link') {
        require('./backLinkCallback').backLinkCallback()
      } else if (event.target.id === 'category-link') {
        require('./categoryLinkCallback').categoryLinkCallback()
      } else {
        require('./homeLinkCallback').homeLinkCallback()
      }
    }

  const otherProducts = JSON.parse(sessionStorage.getItem('products'))
    .filter(product => currentFilters.collection === product.filters.collection
      && JSON.stringify(currentFilters) !== JSON.stringify(product.filters))
    .sort(() => Math.round(Math.random() * 100) - 50)

  require('../../../helpers/pages/productPage/showOtherProducts')
    .showOtherProducts(otherProducts, productsWrapper)
}
