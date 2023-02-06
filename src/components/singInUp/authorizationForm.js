const {
  authorizationTemplate,
  authorizationStyle,
} = require('../../templates/index')

const {
  hideComponentCallback,
  authorizationPasswordCallback,
  authorizationSubmitCallback,
  authorizationRegLinkCallback,
} = require('../../callbacks/index')

const {
  addElem,
  getElemsByIdFromShadow,
} = require('../../helpers/index')

export class AuthorizationForm extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'authorization-section',
      innerHTML: authorizationTemplate,
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: authorizationStyle,
    })

    this.getElemsById = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-auth-form', () => {
      this.section.style.display = 'block'

      document.onkeydown = function (event) {
        if (event.code === 'Escape') hideComponentCallback.bind(this, authorizationTemplate)()
      }.bind(this)

      this.elems = this.getElemsById(require('../../configs/index').authElemNames)

      this.elems.shadow.onclick = hideComponentCallback.bind(this, authorizationTemplate)
      this.elems['close-btn'].onclick = hideComponentCallback.bind(this, authorizationTemplate)

      this.elems.password.oninput = authorizationPasswordCallback.bind(this)
      this.elems.submit.onclick = authorizationSubmitCallback.bind(this)

      this.elems['auth-link'].onclick = authorizationRegLinkCallback.bind(this, authorizationTemplate)
    })
  }
}

customElements.define('auth-form', AuthorizationForm)
