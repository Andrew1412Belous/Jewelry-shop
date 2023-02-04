export function registrationPhoneInputCallback (event) {
  const test = event.target.value.match(require('../../../configs/validation/telValidation').telValidation)

  if (test) {
    event.target.style.color = '#50a450'
    this.elems['set-avatar'].style.display = 'block'
  } else {
    event.target.style.color = '#ea3838'
    this.elems['set-avatar'].style.display = 'none'
  }
}
