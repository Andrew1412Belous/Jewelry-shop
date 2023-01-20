import { updateMainContent } from '../../../helpers'
import { headerElems } from '../../../configs'
import { orderForm } from '../../../components'

export function buyProductsCallback () {
  updateMainContent(headerElems.main, orderForm)
}
