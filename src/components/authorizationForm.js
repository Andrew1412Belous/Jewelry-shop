import {
  addElem,
  getElemsByIdFromShadow, insertFavoriteProducts, toggleDisplayMain,
} from '../helpers'

import {
  authorizationStyle,
  authorizationTemplate,
} from '../templates'

import { authElemNames } from '../configs'

import {
  authorizationPasswordCallback,
  authorizationSubmitCallback,
} from '../callbacks'

class AuthorizationForm extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'authorization-form',
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: authorizationStyle,
    })
    this.section.innerHTML = authorizationTemplate
    this.addElems = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.elems = this.addElems(authElemNames)
    this.elems.password.oninput = authorizationPasswordCallback.bind(this)
    this.elems.submit.onclick = authorizationSubmitCallback.bind(this)
    this.elems['close-btn'].onclick = function () {
      toggleDisplayMain(false)
    }
  }

  disconnectedCallback () {
    this.section.innerHTML = authorizationTemplate
  }
}

customElements.define('auth-form', AuthorizationForm)

export const authForm = document.createElement('auth-form')
