import { onlyNumbersRegExp } from '../../configs/regExp/onlyNumbersRegExp'

export function cardCvvInputCallback (event) {
  event.target.style.color = event.target.value.length === 3 && event.target.value.match(onlyNumbersRegExp)
    ? '#50a450'
    : '#ea3838'
}
