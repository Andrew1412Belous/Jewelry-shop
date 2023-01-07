import { cyrillicRegExp } from '../../configs'

export function setCyrillicInputParamsCallback (event) {
  event.target.style.color = event.target.value.match(cyrillicRegExp)
    ? '#50a450'
    : '#ea3838'
}
