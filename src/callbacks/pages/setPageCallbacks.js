export function setPageCallbacks (title) {
  if (document.title !== 'Contacts') {
    document.getElementById('send-email-btn')
      .onclick = require('./emailSubscrBtnCallback').emailSubscrBtnCallback
  }

  if (title === 'Jewelry shop') {
    require('./mainPage/mainPageCallback').mainPageCallback()
  } else if (title === 'Catalog') {
    require('./catalogPage/catalogPageCallback').catalogPageCallback()
  } else if (title === 'Product') {
    require('./productPage/productPageCallback').productPageCallback()
  }
}
