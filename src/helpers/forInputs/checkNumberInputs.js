import { numberRegExp } from '../../configs'

export function checkNumberInputs (inputs) {
  return inputs.every(input => input.value.match(numberRegExp) && input.value[0] !== '0')
}
