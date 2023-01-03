import { setVerifyPasswordParams } from '../../helpers'
import { passwordRegExp } from '../../configs'

export function registrationPasswordCallback (event) {
  const param = event.target.value.match(passwordRegExp)
    ? ['#50a450', false]
    : ['#ea3838', true]
  setVerifyPasswordParams.call(this, ...param)
}
