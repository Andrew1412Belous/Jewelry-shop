import { myProfileElemNames } from '../../configs'
import { defaultPicture } from '../../assets'

const addElem = require('../../helpers/DOM/addElem').addElem
const currentUser = require('../../helpers/components/profile/currentUser').currentUser

const {
  hideUpdatingComp,
  profileFavoriteCallback,
  profileSignOutCallback,
  profileSettingsCallback,
  profileOrderHistoryCallback,
} = require('../../callbacks/index')

const {
  profileTemplate,
  profileStyle,
} = require('../../templates/index')

export class MyProfile extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'profile-form',
      innerHTML: profileTemplate,
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: profileStyle,
    })
    this.getElemsById = require('../../helpers/components/getElemsByIdFromShadow').getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-profile', () => {
      console.log(10)

      this.section.style.display = 'block'

      this.elems = this.getElemsById(myProfileElemNames)

      this.elems.login.innerText = currentUser.login
      this.elems.avatar.src = currentUser.avatar || defaultPicture
      // this.elems.picture.src = currentUser.avatar || defaultPicture
      // this.elems['back-btn'].onclick = backBtnCallback.bind(this)
      this.elems['profile-favorite'].onclick = profileFavoriteCallback.bind(this)

      this.elems['profile-purchase-history'].onclick = profileOrderHistoryCallback.bind(this)

      this.elems['profile-settings'].onclick = profileSettingsCallback.bind(this)

      this.elems['profile-sign-out'].onclick = profileSignOutCallback.bind(this)

      this.elems['close-btn'].onclick = hideUpdatingComp.bind(this, profileTemplate)
    })
  }
}

customElements.define('my-profile', MyProfile)
