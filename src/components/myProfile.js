import {
  addElem,
  currentUser,
  getElemsByIdFromShadow,
  readImageFromComp,
} from '../helpers'

import {
  profileStyle,
  profileTemplate,
} from '../templates'

import { headerElems, myProfileElemNames } from '../configs'
import { defaultPicture } from '../assets'

import {
  backBtnCallback,
  deleteProfileBtnCallback,
  newEmailBtnCallback,
  newLoginBtnCallback,
  newPasswordBtnCallback,
  personalDataBtn,
  profileSecuritySubmitCallback,
  profileSettingCallback,
  profileSignOutCallback,
  profileSubmitCallback, resetPhoneBtnCallback, securityInputCallback,
  securitySettingsBtn,
} from '../callbacks'

import { profileOrderHistoryCallback } from '../callbacks/components/profile/profileOrderHistoryCallback'

class MyProfile extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'profile-form',
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: profileStyle,
    })
    this.section.innerHTML = profileTemplate
    this.addElems = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-profile', () => {
      this.section.style.display = 'block'

      this.elems = this.addElems(myProfileElemNames)

      // First page
      this.elems.login.innerText = currentUser.login
      this.elems.avatar.src = currentUser.avatar || defaultPicture
      this.elems.picture.src = currentUser.avatar || defaultPicture
      this.elems['back-btn'].onclick = backBtnCallback.bind(this)
      this.elems['profile-favorite'].onclick = function () {}

      this.elems['profile-purchase-history'].onclick = profileOrderHistoryCallback.bind(this)
      this.elems['profile-settings'].onclick = profileSettingCallback.bind(this)
      this.elems['profile-sign-out'].onclick = profileSignOutCallback.bind(this)
      this.elems['close-btn'].onclick = function () {}

      this.elems['personal-data-btn'].onclick = personalDataBtn.bind(this)
      this.elems['security-settings-btn'].onclick = securitySettingsBtn.bind(this)

      if (currentUser.personalInfo) {
        this.elems['input-name'].value = currentUser.personalInfo.name
        this.elems['input-surname'].value = currentUser.personalInfo.surname
        this.elems['input-patronymic'].value = currentUser.personalInfo.patronymic
      }

      this.elems['input-file'].onchange = readImageFromComp.bind(this)
      this.elems['profile-submit-btn'].onclick = profileSubmitCallback.bind(this)

      this.elems['input-phone'].value = currentUser.phone
      this.elems['reset-phone-btn'].onclick = resetPhoneBtnCallback.bind(this)

      this.elems['new-email-btn'].onclick = newEmailBtnCallback.bind(this)
      this.elems['new-login-btn'].onclick = newLoginBtnCallback.bind(this)
      this.elems['new-password-btn'].onclick = newPasswordBtnCallback.bind(this)
      this.elems['delete-profile-btn'].onclick = deleteProfileBtnCallback.bind(this)
      this.elems['input-security'].oninput = securityInputCallback.bind(this)
      this.elems['profile-security-submit-btn'].onclick = profileSecuritySubmitCallback.bind(this)
    })
  }

  disconnectedCallback () {
    this.elems['profile-form'].style.width = '600px'
    this.section.innerHTML = profileTemplate
  }
}

customElements.define('my-profile', MyProfile)

export const myProfile = document.createElement('my-profile')
