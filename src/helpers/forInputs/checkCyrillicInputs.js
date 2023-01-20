import { cyrillicValidation } from '../../configs'

export function checkCyrillicInputs (inputs) {
  return inputs.every(input => input.value.match(cyrillicValidation))
}
