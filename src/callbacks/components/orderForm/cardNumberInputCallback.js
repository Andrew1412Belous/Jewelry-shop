const { cardNumberValidation } = require('../../../configs/index')

export function cardNumberInputCallback (event) {
  event.target.style.color = event.target.value.match(cardNumberValidation)
    ? '#50a450'
    : '#ea3838'
}
