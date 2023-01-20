import {
  addElem,
  getElemsByIdFromShadow,
} from '../helpers'

import {
  authorizationStyle,
  authorizationTemplate,
} from '../templates'

import { authElemNames} from '../configs'

import {
  authorizationPasswordCallback,
  authorizationSubmitCallback,
} from '../callbacks'

import { documentKeyPressCallback } from '../callbacks/components/documentKeyPressCallback'
import { hideComponentCallback } from '../callbacks/components/hideComponentCallback'

class AuthorizationForm extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'authorization-section',
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: authorizationStyle,
    })
    this.section.innerHTML = authorizationTemplate
    this.addElems = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-auth-form', () => {
      document.onkeydown = documentKeyPressCallback.bind(this, authorizationTemplate)

      this.section.style.display = 'block'

      this.elems = this.addElems(authElemNames)

      this.elems.shadow.onclick = hideComponentCallback.bind(this, authorizationTemplate)
      this.elems['close-btn'].onclick = hideComponentCallback.bind(this, authorizationTemplate)

      this.elems.password.oninput = authorizationPasswordCallback.bind(this)
      this.elems.submit.onclick = authorizationSubmitCallback.bind(this)

      this.elems['auth-link'].onclick = function () {
        Object.assign(this.section, {
          style: `
            display: none;
          `,
          innerHTML: authorizationTemplate,
        })

        window[Symbol.for('sign-up')].dispatchEvent(new Event('open-reg-form'))
      }.bind(this)
    })
  }
}

customElements.define('auth-form', AuthorizationForm)

export const authForm = document.createElement('auth-form')
