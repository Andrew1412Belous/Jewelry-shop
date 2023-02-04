const { hideTabContent, showTabContent, tabs } = require('../../../helpers/pages/mainPage/tabs')

export function catalogTabsCallback (event) {
  if (event.target && event.target.classList.contains('catalog-tab')) {
    tabs.forEach((tab, index) => {
      if (tab === event.target) {
        hideTabContent()
        showTabContent(index)
      }
    })
  }
}
