const { onlyNumbersValidation } = require('../../../configs/index')

export function cardCvvInputCallback (event) {
  event.target.style.color = event.target.value.length === 3
  && event.target.value.match(onlyNumbersValidation)
    ? '#50a450'
    : '#ea3838'
}
