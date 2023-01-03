import { headerElems } from '../../configs'

export function toggleDisplayHeaderLinks (test) {
  const display = test ? 'inline' : 'none'

  headerElems['sign-in'].style.display = display
  headerElems['sign-up'].style.display = display
  headerElems['sign-out'].style.display = test ? 'none' : 'inline'

  document.getElementsByClassName('header-links-span')[0].style.display = display
}
