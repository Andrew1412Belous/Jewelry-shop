import sha256 from 'sha256'

import {
  changeProfileIcon,
  checkInputs,
  createUser,
  currentUser, toggleDisplayHeaderLinks,
  toggleDisplayMain,
} from '../../helpers'

import { header } from '../../components/header'
import { hideComponentCallback } from '../components/hideComponentCallback'
import { registrationTemplate } from '../../templates'

const defaultPicture = require('../../assets/defaultPicture')

export function registrationSubmitCallback () {
  const test = checkInputs([this.elems.login, this.elems.password, this.elems['verify-password'], this.elems['set-phone']])
    && this.elems.password.value === this.elems['verify-password'].value

  const password = sha256(this.elems['verify-password'].value)

  if (test) {
    Object.keys(this.elems)
      // eslint-disable-next-line array-callback-return
      .filter(key => {
        key !== 'close-btn'
          ? Object.assign(this.elems[key], { disabled: true })
          : null
      })

    createUser({
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
        hideComponentCallback.bind(this, registrationTemplate)()
      })
  } else {
    this.elems.message.innerText = 'Заповніть усі поля правильно!'
  }
}
