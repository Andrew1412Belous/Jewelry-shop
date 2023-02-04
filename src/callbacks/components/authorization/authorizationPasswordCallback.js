export function authorizationPasswordCallback (event) {
  event.target.style.color = event.target.value.match(require('../../../configs/validation/passwordValidation')
    .passwordValidation) ? '#50a450' : '#ea3838'
}
