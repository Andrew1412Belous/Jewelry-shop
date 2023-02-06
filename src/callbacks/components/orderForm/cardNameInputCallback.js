const { cyrillicValidation } = require('../../../configs/index')
const { checkSpacesInString } = require('../../../helpers/index')

export function cardNameInputCallback (event) {
  const string = event.target.value

  event.target.style.color = string.match(cyrillicValidation) && checkSpacesInString(string, 2)
    ? '#50a450'
    : '#ea3838'
}
