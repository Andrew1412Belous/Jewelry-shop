export function emailSubscrBtnCallback (event) {
  event.target.disabled = true

  if (document.getElementById('email-input').value
    .match(require('../../configs/validation/emailRValidation').emailRValidation)) {
    require('../../helpers/components/emitMessage').emitMessage('Розсилання', 'Дякую за підписку')

    event.target.disabled = false
  } else {
    require('../../helpers/components/emitError').emitError('Розсилання', 'Неправильний email')

    event.target.disabled = false
  }
}
