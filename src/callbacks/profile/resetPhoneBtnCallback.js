import { savePhoneBtnCallback } from './savePhoneBtnCallback'
import { inputPinCallback } from './inputPinCallback'
import { sendSMS } from '../../helpers/sendSMS'

export function resetPhoneBtnCallback (event) {
  const pin = Math.round(Math.random() * 10000)

  sendSMS(pin, this.elems['input-phone'].value)

  this.elems['input-pin'].oninput = inputPinCallback.bind(this, pin)

  this.elems['message-phone'].textContent = 'Введіть PIN з СМС'
  this.elems['save-phone-btn'].onclick = savePhoneBtnCallback.bind(this, pin)

  this.elems['change-phone-form'].style.display = 'flex'
  event.target.style.display = 'none'
}
