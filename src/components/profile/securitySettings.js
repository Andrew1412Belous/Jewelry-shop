const {
  addElem,
  getElemsByIdFromShadow,
} = require('../../helpers/index')

const {
  securitySettingsStyle,
  securitySettingsTemplate,
} = require('../../templates/index')

const {
  hideUpdatingComp,
  personalDataBtn,
  newEmailBtnCallback,
  newLoginBtnCallback,
  newPasswordBtnCallback,
  deleteProfileBtnCallback,
  securityInputCallback,
  profileSecuritySubmitCallback,
} = require('../../callbacks/index')

export class SecuritySettings extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'security-settings-form',
      innerHTML: securitySettingsTemplate,
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: securitySettingsStyle,
    })

    this.getElemsById = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-security-settings', () => {
      this.section.style.display = 'block'

      this.elems = this.getElemsById(require('../../configs/index').securitySettingsElemNames)

      document.onkeydown = function (event) {
        if (event.code === 'Escape') hideUpdatingComp.bind(this, securitySettingsTemplate)()
      }.bind(this)

      this.elems.shadow.onclick = hideUpdatingComp.bind(this, securitySettingsTemplate)
      this.elems['close-btn'].onclick = hideUpdatingComp.bind(this, securitySettingsTemplate)

      this.elems['back-btn'].onclick = personalDataBtn.bind(this)
      this.elems['personal-data-btn'].onclick = personalDataBtn.bind(this, securitySettingsTemplate)

      this.elems['new-email-btn'].onclick = newEmailBtnCallback.bind(this)
      this.elems['new-login-btn'].onclick = newLoginBtnCallback.bind(this)
      this.elems['new-password-btn'].onclick = newPasswordBtnCallback.bind(this)
      this.elems['delete-profile-btn'].onclick = deleteProfileBtnCallback.bind(this)
      this.elems['input-security'].oninput = securityInputCallback.bind(this)
      this.elems['profile-security-submit-btn'].onclick = profileSecuritySubmitCallback.bind(this, securitySettingsTemplate)
    })
  }
}

customElements.define('security-settings', SecuritySettings)
