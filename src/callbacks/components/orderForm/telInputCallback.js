const { telValidation } = require('../../../configs/index')

export function telInputCallback (event) {
  event.target.style.color = event.target.value.match(telValidation)
    ? '#50a450'
    : '#ea3838'
}
