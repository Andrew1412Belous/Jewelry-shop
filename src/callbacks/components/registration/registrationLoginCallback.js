const { loginValidation } = require('../../../configs/index')
const { setPasswordParams } = require('../../../helpers/index')

export function registrationLoginCallback (event) {
  const param = event.target.value.match(loginValidation)
    ? localStorage.getItem(event.target.value)
      ? ['#ea3838', true, 'Цей логін вже використовується\n']
      : ['#50a450', false, '']
    : ['#ea3838', true, 'Неправильно введений логін']

  setPasswordParams.call(this, ...param)
}
