const { deliveryAddressValidation } = require('../../../configs/index')

export function addressInputCallback (event) {
  event.target.style.color = event.target.value.match(deliveryAddressValidation)
    ? '#50a450'
    : '#ea3838'
}
