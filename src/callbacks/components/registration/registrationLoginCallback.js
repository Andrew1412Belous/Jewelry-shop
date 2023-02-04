export function registrationLoginCallback (event) {
  const param = event.target.value.match(require('../../../configs/validation/loginValidation').loginValidation)
    ? localStorage.getItem(event.target.value)
      ? ['#ea3838', true, 'Цей логін вже використовується\n']
      : ['#50a450', false, '']
    : ['#ea3838', true, 'Неправильно введений логін']

  require('../../../helpers/validation/setPasswordParams').setPasswordParams.call(this, ...param)
}
