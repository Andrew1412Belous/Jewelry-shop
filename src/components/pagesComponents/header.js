const {
  addElem,
  currentUser,
} = require('../../helpers/index')

const {
  headerTemplate,
  headerStyle,
} = require('../../templates/index')

export class Header extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.header = Object.assign(addElem('header', this.shadow), {
      id: 'header-section',
      className: 'header',
      innerHTML: headerTemplate,
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: headerStyle,
    })

    this.getElemsById = require('../../helpers/components/getElemsByIdFromShadow').getElemsByIdFromShadow
  }

  static get observedAttributes () {
    return ['entered', 'changed']
  }

  setProfileParams () {
    const test = Object.keys(currentUser).length

    this.elems['header-profile-logo'].src = test ? currentUser.avatar : require('../../assets/img/icons/profile.svg')
    this.elems['sign-up'].style.display = test ? 'none' : 'inline'
    this.elems['sign-in'].style.display = test ? 'none' : 'inline'
    this.elems['header-span'].style.display = test ? 'none' : 'inline'
    this.elems['sign-out'].style.display = test ? 'inline' : 'none'
  }

  attributeChangedCallback (attrName) {
    if (attrName === 'entered') {
      this.setProfileParams()
    } else {
      this.elems['header-profile-logo'].src = currentUser.avatar
    }
  }

  connectedCallback () {
    this.elems = this.getElemsById(require('../../configs/index').headerElemsNames)

    this.setProfileParams()

    this.elems['header-logo'].onclick = require('../../callbacks/index')
      .headerLogoClickCallback.bind(this)

    this.elems['search-btn'].onclick = require('../../callbacks/index')
      .searchCallback

    this.elems['sign-up'].onclick = require('../../callbacks/index')
      .signUpCallback

    this.elems['sign-in'].onclick = require('../../callbacks/index')
      .signInCallback

    this.elems['sign-out'].onclick = require('../../callbacks/index')
      .signOutCallback.bind(this)

    this.elems['my-account'].onclick = require('../../callbacks/index')
      .profileCallback.bind(this)

    this.elems['favorite-products'].onclick = require('../../callbacks/index')
      .favoriteCallback

    this.elems['basket-products'].onclick = require('../../callbacks/index')
      .basketCallback
  }
}

customElements.define('header-component', Header)

export const header = document.createElement('header-component')
