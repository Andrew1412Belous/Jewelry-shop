import {
  addElem,
  getElemsByIdFromShadow,
  readImageFromComp,
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

import { registrationPhoneInputCallback } from '../callbacks/components/registration/registrationPhoneInputCallback'
import { hideComponentCallback } from '../callbacks/components/hideComponentCallback'
import { documentKeyPressCallback } from '../callbacks/components/documentKeyPressCallback'

class RegistrationForm extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'registration-section',
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: registrationStyle,
    })

    this.section.innerHTML = registrationTemplate
    this.getElemsById = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-reg-form', () => {
      document.onkeydown = documentKeyPressCallback.bind(this, registrationTemplate)

      this.section.style.display = 'block'

      this.elems = this.getElemsById(regElemNames)

      this.elems.shadow.onclick = hideComponentCallback.bind(this, registrationTemplate)
      this.elems['close-btn'].onclick = hideComponentCallback.bind(this, registrationTemplate)

      this.elems.login.oninput = registrationLoginCallback.bind(this)
      this.elems.password.oninput = registrationPasswordCallback.bind(this)
      this.elems['verify-password'].oninput = registrationVerifyPasswordCallback.bind(this)
      this.elems.avatar.onchange = readImageFromComp.bind(this)
      this.elems.submit.onclick = registrationSubmitCallback.bind(this)

      this.elems['reg-link'].onclick = function () {
        Object.assign(this.section, {
          style: `
            display: none;
          `,
          innerHTML: registrationTemplate,
        })

        window[Symbol.for('sign-in')].dispatchEvent(new Event('open-auth-form'))
      }.bind(this)

      this.elems['set-phone'].oninput = registrationPhoneInputCallback.bind(this)
    })
  }
}

customElements.define('reg-form', RegistrationForm)

export const regForm = document.createElement('reg-form')
