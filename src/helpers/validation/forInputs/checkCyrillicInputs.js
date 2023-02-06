export function checkCyrillicInputs (inputs) {
  return inputs.every(input => input.value.match(require('../../../configs/validation/cyrillicValidation')
    .cyrillicValidation))
}
