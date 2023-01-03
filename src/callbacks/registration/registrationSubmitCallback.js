import sha256 from 'sha256'

import {
  changeProfileIcon,
  checkInputs,
  createUser,
  currentUser, toggleDisplayHeaderLinks,
  toggleDisplayMain,
} from '../../helpers'

import {
  defaultPicture,
} from '../../assets'

export function registrationSubmitCallback () {
  const test = checkInputs([this.elems.login, this.elems.password, this.elems['verify-password']])
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
    })
      .then(response => {
        Object.assign(currentUser, response)

        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
        localStorage.setItem(response.login, password)

        toggleDisplayMain(false)
        toggleDisplayHeaderLinks(false)
        changeProfileIcon(response.avatar)
      })
  } else {
    this.elems.message.innerText = 'Заповніть усі поля правильно!'
  }
}
