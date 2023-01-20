import { setPageCallbacks } from './setPageCallbacks'
import { header } from '../../components/header'

export function DOMContentLoadCallback () {
 document.getElementsByClassName('container')[0]
    .insertBefore(header, document.getElementsByClassName('promo-wrapper')[0])

  setPageCallbacks(document.title)
}
