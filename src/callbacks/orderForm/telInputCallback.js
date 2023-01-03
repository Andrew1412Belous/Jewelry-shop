import { telRegExp } from '../../configs'

export function telInputCallback (event) {
  const test = event.target.value.match(telRegExp)

  event.target.style.color = test ? '#50a450' : '#ea3838'
}
