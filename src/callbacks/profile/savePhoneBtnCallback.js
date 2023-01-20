import { telRegExp } from '../../configs'
import { currentUser, patchUser } from '../../helpers'

export function savePhoneBtnCallback (pin, event) {
  if (pin === Number(this.elems['input-pin'].value)) {
    this.elems['input-phone'].value = this.elems['input-new-phone'].value.indexOf('+380')
      ? `+38${this.elems['input-new-phone'].value}`
      : this.elems['input-new-phone'].value

    if (this.elems['input-new-phone'].value.match(telRegExp)) {
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
    this.elems['message-phone'].textContent = 'Неправильний PIN'

    this.elems['change-phone-form'].style.display = 'none'
    this.elems['reset-phone-btn'].style.display = 'block'
  }
}
