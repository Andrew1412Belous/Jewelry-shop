const {
  personalSettingsStyle,
  personalSettingsTemplate,
} = require('../../templates/index')

const currentUser = require('../../helpers/components/profile/currentUser').currentUser
const addElem = require('../../helpers/DOM/addElem').addElem

const {
  securitySettingsBtn,
  profileSubmitCallback,
  resetPhoneBtnCallback,
} = require('../../callbacks/index')

export class PersonalSettings extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'security-settings-wrapper',
      innerHTML: personalSettingsTemplate,
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: personalSettingsStyle,
    })
    this.getElemsById = require('../../helpers/components/getElemsByIdFromShadow')
      .getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-personal-settings', () => {
      this.section.style.display = 'block'

      this.elems = this.getElemsById(require('../../configs/components/personalSettings/personalSettingsElemNames')
        .personalSettingsElemNames)

      this.elems.picture.src = currentUser.avatar

      // this.elems['personal-data-btn'].onclick = personalDataBtn.bind(this)
      this.elems['security-settings-btn'].onclick = securitySettingsBtn.bind(this)

      if (currentUser.personalInfo) {
        this.elems['input-name'].value = currentUser.personalInfo.name
        this.elems['input-surname'].value = currentUser.personalInfo.surname
        this.elems['input-patronymic'].value = currentUser.personalInfo.patronymic
      }

      this.elems['input-file'].onchange = require('../../helpers/components/readImageFromComp')
        .readImageFromComp.bind(this)
      this.elems['profile-submit-btn'].onclick = profileSubmitCallback.bind(this)

      this.elems['input-phone'].value = currentUser.phone
      this.elems['reset-phone-btn'].onclick = resetPhoneBtnCallback.bind(this)
    })
  }
}

customElements.define('personal-settings', PersonalSettings)

// export const personalSettings = document.createElement('personal-settings')
