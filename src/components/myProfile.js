import {
  addElem,
  currentUser,
  getElemsByIdFromShadow,
  readImageFromComp,
  toggleDisplayMain, updateMainContent,
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
  profileSubmitCallback, securityInputCallback,
  securitySettingsBtn,
} from '../callbacks'
import { favProd } from './favoriteComp'
import { profileOrderHistoryCallback } from '../callbacks/profile/profileOrderHistoryCallback'

class MyProfile extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('header', this.shadow), {
      id: 'profile-form',
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: profileStyle,
    })
    this.section.innerHTML = profileTemplate
    this.addElems = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.elems = this.addElems(myProfileElemNames)

    // First page
    this.elems.login.innerText = currentUser.login
    this.elems.avatar.src = currentUser.avatar || defaultPicture
    this.elems.picture.src = currentUser.avatar || defaultPicture
    this.elems['back-btn'].onclick = backBtnCallback.bind(this)
    this.elems['profile-favorite'].onclick = function () {
      updateMainContent(headerElems.main, favProd)
    }

    this.elems['profile-purchase-history'].onclick = profileOrderHistoryCallback.bind(this)
    this.elems['profile-settings'].onclick = profileSettingCallback.bind(this)
    this.elems['profile-sign-out'].onclick = profileSignOutCallback.bind(this)
    this.elems['close-btn'].onclick = function () {
      toggleDisplayMain(false)
      headerElems.main.innerHTML = ''
    }

    this.elems['personal-data-btn'].onclick = personalDataBtn.bind(this)
    this.elems['security-settings-btn'].onclick = securitySettingsBtn.bind(this)

    if (currentUser.personalInfo) {
      this.elems['input-name'].value = currentUser.personalInfo.name
      this.elems['input-surname'].value = currentUser.personalInfo.surname
      this.elems['input-patronymic'].value = currentUser.personalInfo.patronymic
    }

    this.elems['input-file'].onchange = readImageFromComp.bind(this)
    this.elems['profile-submit-btn'].onclick = profileSubmitCallback.bind(this)

    this.elems['new-email-btn'].onclick = newEmailBtnCallback.bind(this)
    this.elems['new-login-btn'].onclick = newLoginBtnCallback.bind(this)
    this.elems['new-password-btn'].onclick = newPasswordBtnCallback.bind(this)
    this.elems['delete-profile-btn'].onclick = deleteProfileBtnCallback.bind(this)
    this.elems['input-security'].oninput = securityInputCallback.bind(this)
    this.elems['profile-security-submit-btn'].onclick = profileSecuritySubmitCallback.bind(this)
  }

  disconnectedCallback () {
    this.elems['profile-form'].style.width = '600px'
    this.section.innerHTML = profileTemplate
  }
}

customElements.define('my-profile', MyProfile)

export const myProfile = document.createElement('my-profile')
