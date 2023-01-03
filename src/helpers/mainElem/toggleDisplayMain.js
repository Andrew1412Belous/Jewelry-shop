import { headerElems } from '../../configs'

export function toggleDisplayMain (test) {
  headerElems.main.classList.toggle('hide')
  headerElems.main.classList.toggle('show')
  document.body.style.overflow = test ? 'hidden' : ''
}
