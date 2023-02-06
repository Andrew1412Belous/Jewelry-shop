import sha256 from 'sha256'

const { hideComponentCallback } = require('../hideComponentCallback')
const header = require('../../../components/pagesComponents/header').header
const defaultPicture = require('../../../assets/defaultPicture')

const {
  currentUser,
  isInputEmpty,
} = require('../../../helpers/index')

export function registrationSubmitCallback (template) {
  const test = isInputEmpty([this.elems.login, this.elems.password, this.elems['verify-password'], this.elems['set-phone']])
    && this.elems.password.value === this.elems['verify-password'].value

  const password = sha256(this.elems['verify-password'].value)

  if (test) {
    Object.keys(this.elems)
      .forEach(key => {
        key !== 'close-btn'
          ? Object.assign(this.elems[key], { disabled: true })
          : null
      })

    require('../../../helpers/index').createUser({
      login: this.elems.login.value,
      password,
      avatar: this.elems.picture.src || defaultPicture,
      phone: this.elems['set-phone'].value.indexOf('+380')
        ? `+38${this.elems['set-phone'].value}`
        : this.elems['set-phone'].value,
    })
      .then(response => {
        Object.assign(currentUser, response)

        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
        localStorage.setItem(response.login, password)

        header.setAttribute('entered', 'true')
        hideComponentCallback.bind(this, template)()
      })
  } else {
    this.elems.message.innerText = 'Заповніть усі поля правильно!'
  }
}
