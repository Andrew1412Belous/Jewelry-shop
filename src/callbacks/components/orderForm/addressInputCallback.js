import { deliveryAddressRegExp } from '../../../configs/validation/deliveryAddressValidation'

export function addressInputCallback (event) {
  event.target.style.color = event.target.value.match(deliveryAddressRegExp)
    ? '#50a450'
    : '#ea3838'
}
