export function setPageFunction (title) {
  if (document.title !== 'Contacts') {
    document.getElementById('send-email-btn')
      .onclick = require('../../callbacks/pages/emailSubscrBtnCallback').emailSubscrBtnCallback
  }

  if (title === 'Jewelry shop') {
    require('../pages/mainPage/mainPageFunction').mainPageFunction()
  } else if (title === 'Catalog') {
    require('../pages/catalogPage/catalogPageFunction').catalogPageFunction()
  } else if (title === 'Product') {
    require('../pages/productPage/productPageFunction').productPageFunction()
  }
}
