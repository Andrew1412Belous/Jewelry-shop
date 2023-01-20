import {
  currentUser,
  setProfileSecurityBlockParams,
  toggleDisplayElems,
} from '../../helpers'
import { sendSMS } from '../../helpers/sendSMS'

export function deleteProfileBtnCallback () {
  Object.assign(this.elems['security-message'], {
    innerText: 'Введіть PIN з СМС',
    style: `
      color: #fff;
    `,
  })

  this.elems['security-verify-block'].style.display = 'block'
  this.elems['security-block'].style.display = 'none'
  this.elems['input-verify'].value = ''

  const pin = Math.round(Math.random() * 100000)

  // sendSMS(pin, currentUser.phone)

  console.log(pin)

  this.elems['verify-submit-btn'].onclick = function () {
    if (Number(this.elems['input-verify'].value) === pin) {
      Object.assign(this.elems['security-message'], {
        innerText: '',
        style: `
      color: #fff;
    `,
      })

      setProfileSecurityBlockParams.call(this, 'Ви впевнені?', 'Видалити аккаунт', currentUser.email ? currentUser.email : '')
      this.elems['profile-security-submit-btn'].disabled = false

      toggleDisplayElems([this.elems['security-verify-block']], false)
      toggleDisplayElems([this.elems['security-block']], true)
      this.elems['input-security'].style.display = 'none'
    } else {
      Object.assign(this.elems['security-message'], {
        innerText: 'Невірний PIN',
        style: `
          color: #ea3838;
        `,
      })

      setTimeout(() => this.elems['security-message'].innerText = '', 1000)
      this.elems['security-verify-block'].style.display = 'none'
    }
  }.bind(this)
}
