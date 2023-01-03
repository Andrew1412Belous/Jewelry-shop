import {
  addElem,
  getElemsByIdFromShadow,
  readImageFromComp,
  toggleDisplayMain,
} from '../helpers'

import {
  registrationStyle,
  registrationTemplate,
} from '../templates'

import { regElemNames } from '../configs'

import {
  registrationLoginCallback,
  registrationPasswordCallback,
  registrationSubmitCallback,
  registrationVerifyPasswordCallback,
} from '../callbacks'

class RegistrationForm extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'registration-form',
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: registrationStyle,
    })
    this.section.innerHTML = registrationTemplate
    this.addElems = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.elems = this.addElems(regElemNames)
    this.elems.login.oninput = registrationLoginCallback.bind(this)
    this.elems.password.oninput = registrationPasswordCallback.bind(this)
    this.elems['verify-password'].oninput = registrationVerifyPasswordCallback.bind(this)
    this.elems.avatar.onchange = readImageFromComp.bind(this)
    this.elems.submit.onclick = registrationSubmitCallback.bind(this)
    this.elems['close-btn'].onclick = function () {
      toggleDisplayMain(false)
    }
  }

  disconnectedCallback () {
    this.elems['registration-form'].innerHTML = registrationTemplate
  }
}

customElements.define('reg-form', RegistrationForm)

export const regForm = document.createElement('reg-form')
