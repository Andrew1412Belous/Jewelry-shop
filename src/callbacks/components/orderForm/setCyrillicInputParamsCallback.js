const { cyrillicValidation } = require('../../../configs/index')

export function setCyrillicInputParamsCallback (event) {
  event.target.style.color = event.target.value.match(cyrillicValidation)
    ? '#50a450'
    : '#ea3838'
}
