const { setVerifyPasswordParams } = require('../../../helpers/index')
const { passwordValidation } = require('../../../configs/index')

export function registrationPasswordCallback (event) {
  const param = event.target.value.match(passwordValidation)
    ? ['#50a450', false]
    : ['#ea3838', true]

  setVerifyPasswordParams.call(this, ...param)
}
