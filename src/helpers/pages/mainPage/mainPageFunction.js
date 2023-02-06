const { hideTabContent, showTabContent } = require('./tabs')

const {
  salonsBtnCallback,
  catalogTabsCallback,
  catalogBtnCallback,
  blogBtnCallback,
  catalogLinkClickCallback,
} = require('../../../callbacks')

export function mainPageFunction () {
  hideTabContent()
  showTabContent()

  document.getElementById('salons-btn').onclick = salonsBtnCallback
  document.getElementById('catalog-tabs').onclick = catalogTabsCallback
  document.getElementById('catalog-btn').onclick = catalogBtnCallback
  document.getElementById('blog-btn').onclick = blogBtnCallback

  document.querySelectorAll('.catalog-item-link')
    .forEach(link => link.onclick = catalogLinkClickCallback)
}
