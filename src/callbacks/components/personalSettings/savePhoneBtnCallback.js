import sha256 from 'sha256'

const { telValidation } = require('../../../configs/index')

const {
  patchUser,
  currentUser,
  emitError,
} = require('../../../helpers/index')

export function savePhoneBtnCallback () {
  if (currentUser.password === sha256(this.elems['input-password'].value)) {
    if (this.elems['input-new-phone'].value.match(telValidation)) {
      this.elems['input-phone'].value = this.elems['input-new-phone'].value.indexOf('+380')
        ? `+38${this.elems['input-new-phone'].value}`
        : this.elems['input-new-phone'].value

      patchUser(currentUser.id, {
        phone: this.elems['input-phone'].value,
      })
        .then(response => {
          Object.assign(currentUser, response)

          sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
        })

      this.elems['message-phone'].textContent = ''
      this.elems['change-phone-form'].style.display = 'none'
      this.elems['reset-phone-btn'].style.display = 'block'
    } else {
      this.elems['message-phone'].textContent = 'Неправильний телефон'
    }
  } else {
    emitError('Зміна номеру', 'неправильний телефон')

    this.elems['message-phone'].textContent = 'Неправильний пароль'
    this.elems['change-phone-form'].style.display = 'none'
    this.elems['reset-phone-btn'].style.display = 'block'
  }
}
