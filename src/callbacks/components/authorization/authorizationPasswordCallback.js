export function authorizationPasswordCallback (event) {
  event.target.style.color = event.target.value.match(require('../../../configs/index')
    .passwordValidation) ? '#50a450' : '#ea3838'
}
