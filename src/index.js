import './css/style.css'

import {
  addElem,
  DOMContentLoadCallback,
  getAllUsers,
  windowLoadCallback,
} from './helpers'

import { header } from './components/header'

if (!sessionStorage.length) {
  getAllUsers()
    .then(users => Object.keys(users)
      .forEach(key => localStorage.setItem(users[key].login, users[key].password)))
}

document.addEventListener('DOMContentLoaded', DOMContentLoadCallback)

window.onload = windowLoadCallback

const popupsWrapper = Object.assign(document.body
  .appendChild(document.createElement('div')), {
  className: 'popup-wrapper',
})

window[Symbol.for('header')] = header
window[Symbol.for('sign-up')] = addElem('reg-form', popupsWrapper)
window[Symbol.for('sign-in')] = addElem('auth-form', popupsWrapper)
window[Symbol.for('favorite-comp')] = addElem('favorite-products', popupsWrapper)
window[Symbol.for('basket-comp')] = addElem('basket-products', popupsWrapper)
window[Symbol.for('profile-comp')] = addElem('my-profile', popupsWrapper)
window[Symbol.for('order-form-comp')] = addElem('order-form', popupsWrapper)
window[Symbol.for('order-history-comp')] = addElem('order-history', popupsWrapper)

// headerElems.main.onclick = closeMainCallback
// headerElems['sign-up'].onclick = signUpCallback
// headerElems['sign-in'].onclick = signInCallback
// headerElems['sign-out'].onclick = signOutCallback
// headerElems['my-account'].onclick = profileCallback
// headerElems['favorite-products'].onclick = favoriteCallback
// headerElems['basket-products'].onclick = basketCallback
// headerElems['header-logo'].onclick = headerLogoClickCallback
