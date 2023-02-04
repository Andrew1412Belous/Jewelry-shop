const { savePhoneBtnCallback } = require('./savePhoneBtnCallback')

export function resetPhoneBtnCallback (event) {
  this.elems['message-phone'].textContent = 'Введіть ваш пароль'

  this.elems['save-phone-btn'].onclick = savePhoneBtnCallback.bind(this)

  this.elems['change-phone-form'].style.display = 'flex'

  event.target.style.display = 'none'
}
