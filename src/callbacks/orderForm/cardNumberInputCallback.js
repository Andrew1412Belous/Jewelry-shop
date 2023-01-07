import { cardNumberRegExp } from '../../configs'

export function cardNumberInputCallback (event) {
  event.target.style.color = event.target.value.match(cardNumberRegExp)
    ? '#50a450'
    : '#ea3838'
}
