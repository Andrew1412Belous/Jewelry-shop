import {
  setInputMode,
  setProfileInputParams,
} from '../../../helpers'

import {
  emailRValidation,
  passwordValidation
} from '../../../configs'

export function securityInputCallback (event) {
  const mode = setInputMode(this.elems['security-text'])

  if (mode === 'email') {
    event.target.value.match(emailRValidation)
      ? setProfileInputParams.call(this, '#50a450', false)
      : setProfileInputParams.call(this, '#ea3838', true)
  } else if (mode === 'login') {
    localStorage.getItem(event.target.value)
      ? setProfileInputParams.call(this, '#ea3838', true)
      : setProfileInputParams.call(this, '#50a450', false)
  } else if (mode === 'password') {
    event.target.value.match(passwordValidation)
      ? setProfileInputParams.call(this, '#50a450', false)
      : setProfileInputParams.call(this, '#ea3838', true)
  }
}
