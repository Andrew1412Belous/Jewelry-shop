const { hideTabContent, showTabContent } = require('../../../helpers/pages/mainPage/tabs')

export function mainPageCallback () {
  hideTabContent()
  showTabContent()

  document.getElementById('salons-btn').onclick = require('./salonsBtnCallback').salonsBtnCallback
  document.getElementById('catalog-tabs').onclick = require('./catalogTabsCallback').catalogTabsCallback
  document.getElementById('catalog-btn').onclick = require('./catalogBtnCallback').catalogBtnCallback
  document.getElementById('blog-btn').onclick = require('./blogBtnCallback').blogBtnCallback

  document.querySelectorAll('.catalog-item-link')
    .forEach(link => link.onclick = require('./catalogLinkClickCallback').catalogLinkClickCallback)
}
