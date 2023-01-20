export function checkInputsEquality (firstInput, secondInput) {
  return Number(firstInput.value) >= 0
    && Number(secondInput.value) >= Number(firstInput.value)
}
