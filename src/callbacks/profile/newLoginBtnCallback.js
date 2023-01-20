import {
  currentUser,
  setProfileSecurityBlockParams,
  toggleDisplayElems,
} from '../../helpers'

export function newLoginBtnCallback () {
  Object.assign( this.elems['security-message'], {
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

      setProfileSecurityBlockParams.call(this, 'Новий логін', 'Встановити логін', currentUser.login)

      this.elems['security-verify-block'].style.display = 'none'
      toggleDisplayElems([this.elems['security-block']], true)
    } else {
      Object.assign( this.elems['security-message'], {
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
