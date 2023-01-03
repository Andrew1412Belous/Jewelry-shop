import {
  setInputMode,
  setProfileInputParams,
} from '../../helpers'

import {
  emailRRegExp,
  passwordRegExp
} from '../../configs'

export function securityInputCallback (event) {
  const mode = setInputMode(this.elems['security-text'])

  if (mode === 'email') {
    event.target.value.match(emailRRegExp)
      ? setProfileInputParams.call(this, '#50a450', false)
      : setProfileInputParams.call(this, '#ea3838', true)
  } else if (mode === 'login') {
    localStorage.getItem(event.target.value)
      ? setProfileInputParams.call(this, '#ea3838', true)
      : setProfileInputParams.call(this, '#50a450', false)
  } else if (mode === 'password') {
    event.target.value.match(passwordRegExp)
      ? setProfileInputParams.call(this, '#50a450', false)
      : setProfileInputParams.call(this, '#ea3838', true)
  }
}
