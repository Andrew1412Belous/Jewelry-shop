const {
  personalSettingsStyle,
  personalSettingsTemplate,
} = require('../../templates/index')

const {
  addElem,
  currentUser,
  getElemsByIdFromShadow,
  readImageFromComp,
} = require('../../helpers/index')

const {
  securitySettingsBtn,
  profileSubmitCallback,
  resetPhoneBtnCallback,
  favoriteBackBtnCallback,
  hideUpdatingComp,
} = require('../../callbacks/index')

export class PersonalSettings extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'personal-settings-form',
      innerHTML: personalSettingsTemplate,
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: personalSettingsStyle,
    })

    this.getElemsById = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-personal-settings', () => {
      this.section.style.display = 'block'

      document.onkeydown = function (event) {
        if (event.code === 'Escape') hideUpdatingComp.bind(this, personalSettingsTemplate)()
      }.bind(this)

      this.elems = this.getElemsById(require('../../configs/index').personalSettingsElemNames)

      this.elems.shadow.onclick = hideUpdatingComp.bind(this, personalSettingsTemplate)
      this.elems['close-btn'].onclick = hideUpdatingComp.bind(this, personalSettingsTemplate)

      this.elems.picture.src = currentUser.avatar

      this.elems['security-settings-btn'].onclick = securitySettingsBtn.bind(this, personalSettingsTemplate)

      this.elems['back-btn'].onclick = favoriteBackBtnCallback.bind(this, personalSettingsTemplate)

      if (currentUser.personalInfo) {
        this.elems['input-name'].value = currentUser.personalInfo.name
        this.elems['input-surname'].value = currentUser.personalInfo.surname
        this.elems['input-patronymic'].value = currentUser.personalInfo.patronymic
      }

      this.elems['input-file'].onchange = readImageFromComp.bind(this)
      this.elems['profile-submit-btn'].onclick = profileSubmitCallback.bind(this)

      this.elems['input-phone'].value = currentUser.phone
      this.elems['reset-phone-btn'].onclick = resetPhoneBtnCallback.bind(this)
    })
  }
}

customElements.define('personal-settings', PersonalSettings)

// export const personalSettings = document.createElement('personal-settings')
