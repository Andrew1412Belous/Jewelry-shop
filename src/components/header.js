import { addElem, currentUser, getElemsByIdFromShadow } from '../helpers'
import { headerStyle } from '../templates/header/headerStyle'
import { headerTemplate } from '../templates/header/headerTemplate'
import { headerElemsNames } from '../configs'
import {
  basketCallback,
  favoriteCallback,
  headerLogoClickCallback,
  profileCallback,
  signInCallback,
  signOutCallback,
  signUpCallback
} from '../callbacks'

const profileIcon = require('../assets/img/icons/profile.svg')

export class Header extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })

    this.header = Object.assign(addElem('header', this.shadow), {
      id: 'header-section',
      className: 'header',
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: headerStyle,
    })

    this.header.innerHTML = headerTemplate
    this.getElemsById = getElemsByIdFromShadow
  }

  static get observedAttributes () {
    return ['entered']
  }

  setProfileParams () {
    const test = Object.keys(currentUser).length

    this.elems['header-profile-logo'].src = test ? currentUser.avatar : profileIcon
    this.elems['sign-up'].style.display = test ? 'none' : 'inline'
    this.elems['sign-in'].style.display = test ? 'none' : 'inline'
    this.elems['header-span'].style.display = test ? 'none' : 'inline'
    this.elems['sign-out'].style.display = test ? 'inline' : 'none'
  }

  attributeChangedCallback (attrName) {
    if (attrName === 'entered') {
      this.setProfileParams()
    }
  }

  connectedCallback () {
    this.elems = this.getElemsById(headerElemsNames)

    this.setProfileParams()

    this.elems['header-logo'].onclick = headerLogoClickCallback.bind(this)

    this.elems['sign-up'].onclick = signUpCallback
    this.elems['sign-in'].onclick = signInCallback
    this.elems['sign-out'].onclick = signOutCallback.bind(this)

    this.elems['my-account'].onclick = profileCallback.bind(this)
    this.elems['favorite-products'].onclick = favoriteCallback
    this.elems['basket-products'].onclick = basketCallback
  }
}

customElements.define('header-component', Header)

export const header = document.createElement('header-component')
