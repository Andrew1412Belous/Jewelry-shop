import { setPhoneParams } from '../../../helpers'

export function registrationVerifyPasswordCallback (event) {
  const param = event.target.value === this.elems.password.value ? ['#50a450', 'block'] : ['#ea3838', 'none']
  setPhoneParams.call(this, ...param)
}
