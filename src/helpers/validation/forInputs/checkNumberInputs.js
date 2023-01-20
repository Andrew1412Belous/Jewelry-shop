import { numberValidation } from '../../../configs'

export function checkNumberInputs (inputs) {
  return inputs.every(input => input.value.match(numberValidation) && input.value[0] !== '0')
}
