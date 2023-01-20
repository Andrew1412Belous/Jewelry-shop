import { telRegExp } from '../../../configs'

export function telInputCallback (event) {
  event.target.style.color = event.target.value.match(telRegExp)
    ? '#50a450'
    : '#ea3838'
}
