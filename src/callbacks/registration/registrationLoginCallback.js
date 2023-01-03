import { setPasswordParams } from '../../helpers'
import { loginRegExp } from '../../configs'

export function registrationLoginCallback (event) {
  const param = event.target.value.match(loginRegExp)
    ? localStorage.getItem(event.target.value)
      ? ['#ea3838', true, 'Цей логін вже використовується\n']
      : ['#50a450', false, '']
    : ['#ea3838', true, 'Неправильно введений логін']

  setPasswordParams.call(this, ...param)
}
