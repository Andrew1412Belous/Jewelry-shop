const {
  addElem,
  setPageFunction,
} = require('../../helpers/index')

export function DOMContentLoadCallback () {
  document.getElementsByClassName('container')[0]
    .insertBefore(require('../../components/index').header, document.querySelector('.promo-wrapper'))

  const componentsWrapper = Object.assign(document.body
    .appendChild(document.createElement('div')), {
    className: 'components-wrapper',
  })

  window[Symbol.for('sign-up')] = addElem('reg-form', componentsWrapper)
  window[Symbol.for('sign-in')] = addElem('auth-form', componentsWrapper)
  window[Symbol.for('favorite-comp')] = addElem('favorite-products', componentsWrapper)
  window[Symbol.for('basket-comp')] = addElem('basket-products', componentsWrapper)
  window[Symbol.for('profile-comp')] = addElem('my-profile', componentsWrapper)
  window[Symbol.for('order-form-comp')] = addElem('order-form', componentsWrapper)
  window[Symbol.for('order-history-comp')] = addElem('order-history', componentsWrapper)
  window[Symbol.for('error-popup')] = addElem('error-popup', componentsWrapper)
  window[Symbol.for('message-popup')] = addElem('message-popup', componentsWrapper)
  window[Symbol.for('personal-settings')] = addElem('personal-settings', componentsWrapper)
  window[Symbol.for('security-settings')] = addElem('security-settings', componentsWrapper)
  window[Symbol.for('search-component')] = addElem('search-component', componentsWrapper)

  setPageFunction(document.title)
}
