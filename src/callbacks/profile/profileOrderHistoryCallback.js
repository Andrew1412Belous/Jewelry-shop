import { updateMainContent } from '../../helpers'
import { headerElems } from '../../configs'
import { orderHistory } from '../../components'

export function profileOrderHistoryCallback (event) {
  updateMainContent(headerElems.main, orderHistory)
}
