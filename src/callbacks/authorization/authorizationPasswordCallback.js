import { passwordRegExp } from '../../configs'

export function authorizationPasswordCallback (event) {
  event.target.style.color = event.target.value.match(passwordRegExp) ? '#50a450' : '#ea3838'
}
