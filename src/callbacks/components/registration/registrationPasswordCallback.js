const setVerifyPasswordParams = require('../../../helpers/components/registration/setVerifyPasswordParams').setVerifyPasswordParams
const passwordValidation = require('../../../configs/validation/passwordValidation').passwordValidation

export function registrationPasswordCallback (event) {
  const param = event.target.value.match(passwordValidation)
    ? ['#50a450', false]
    : ['#ea3838', true]
  setVerifyPasswordParams.call(this, ...param)
}
