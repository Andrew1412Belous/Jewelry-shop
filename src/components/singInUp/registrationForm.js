const {
  registrationTemplate,
  registrationStyle,
} = require('../../templates/index')

const {
  hideComponentCallback,
  registrationLoginCallback,
  registrationPasswordCallback,
  registrationVerifyPasswordCallback,
  registrationSubmitCallback,
  registrationPhoneInputCallback,
  registrationAuthLinkCallback,
} = require('../../callbacks/index')

const addElem = require('../../helpers/DOM/addElem').addElem
const getElemsByIdFromShadow = require('../../helpers/components/getElemsByIdFromShadow').getElemsByIdFromShadow

export class RegistrationForm extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'registration-section',
      innerHTML: registrationTemplate,
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: registrationStyle,
    })

    this.getElemsById = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-reg-form', () => {
      this.section.style.display = 'block'

      document.onkeydown = function (event) {
        if (event.code === 'Escape') hideComponentCallback.bind(this, registrationTemplate)()
      }

      this.elems = this.getElemsById(require('../../configs/components/registration/regElemNames').regElemNames)

      this.elems.shadow.onclick = hideComponentCallback.bind(this, registrationTemplate)
      this.elems['close-btn'].onclick = hideComponentCallback.bind(this, registrationTemplate)

      this.elems.login.oninput = registrationLoginCallback.bind(this)
      this.elems.password.oninput = registrationPasswordCallback.bind(this)
      this.elems['verify-password'].oninput = registrationVerifyPasswordCallback.bind(this)

      this.elems.avatar.onchange = require('../../helpers/components/readImageFromComp')
        .readImageFromComp.bind(this)

      this.elems.submit.onclick = registrationSubmitCallback.bind(this, registrationTemplate)

      this.elems['reg-link'].onclick = registrationAuthLinkCallback.bind(this, registrationTemplate)

      this.elems['set-phone'].oninput = registrationPhoneInputCallback.bind(this)
    })
  }
}

customElements.define('reg-form', RegistrationForm)
