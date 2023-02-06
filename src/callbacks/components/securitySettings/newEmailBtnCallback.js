import sha256 from 'sha256'

const { currentUser } = require('../../../helpers/index')

export function newEmailBtnCallback () {
  Object.assign(this.elems['security-message'], {
    innerText: 'Введіть PIN з СМС',
    style: `
      color: #fff;
    `,
  })

  this.elems['security-verify-block'].style.display = 'block'
  this.elems['security-block'].style.display = 'none'
  this.elems['input-verify'].value = ''

  this.elems['verify-submit-btn'].onclick = function () {
    if (sha256(this.elems['input-verify'].value) === currentUser.password) {
      Object.assign(this.elems['security-message'], {
        innerText: '',
        style: `
          color: #fff;
        `,
      })

      require('../../../helpers/index')
        .setProfileSecurityBlockParams.call(this, 'Новий email', 'Встановити email', currentUser.email ? currentUser.email : '')

      this.elems['security-block'].style.display = 'block'
      this.elems['security-verify-block'].style.display = 'none'
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