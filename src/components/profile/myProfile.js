const defaultPicture = require('../../assets/defaultPicture').defaultPicture

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

const {
  addElem,
  currentUser,
  getElemsByIdFromShadow,
} = require('../../helpers/index')

export class MyProfile extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'profile-form-wrapper',
      innerHTML: profileTemplate,
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: profileStyle,
    })

    this.getElemsById = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-profile', () => {
      this.section.style.display = 'block'

      document.onkeydown = function (event) {
        if (event.code === 'Escape') hideUpdatingComp.bind(this, profileTemplate)()
      }.bind(this)

      this.elems = this.getElemsById(require('../../configs/index').myProfileElemNames)

      this.elems.login.innerText = currentUser.login
      this.elems.avatar.src = currentUser.avatar || defaultPicture

      this.elems.shadow.onclick = hideUpdatingComp.bind(this, profileTemplate)
      this.elems['profile-favorite'].onclick = profileFavoriteCallback.bind(this, profileTemplate)
      this.elems['profile-purchase-history'].onclick = profileOrderHistoryCallback.bind(this, profileTemplate)
      this.elems['profile-settings'].onclick = profileSettingsCallback.bind(this, profileTemplate)
      this.elems['profile-sign-out'].onclick = profileSignOutCallback.bind(this, profileTemplate)
      this.elems['close-btn'].onclick = hideUpdatingComp.bind(this, profileTemplate)
    })
  }
}

customElements.define('my-profile', MyProfile)
