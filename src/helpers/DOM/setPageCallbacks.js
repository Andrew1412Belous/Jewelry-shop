import { mainPageCallback } from '../pages/mainPageCallback'
import { contactsPageCallback } from '../pages/contactsPageCallback'
import { catalogPageCallback } from '../pages/catalogPageCallback'
import { productPageCallback } from '../pages/productPageCallback'

export function setPageCallbacks (title) {
  if (title === 'Jewelry shop') {
    mainPageCallback()
  } else if (title === 'Contacts') {
    contactsPageCallback()
  } else if (title === 'Catalog') {
    catalogPageCallback()
  } else {
    productPageCallback()
  }
}
