export function inputPinCallback (pin, event) {
  if (pin === Number(event.target.value)) {
    this.elems['input-new-phone']
  }

  console.log(pin)
  console.log(event.target.value)
}
