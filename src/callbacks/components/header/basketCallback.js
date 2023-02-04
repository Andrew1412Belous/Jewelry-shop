export function basketCallback () {
  sessionStorage.getItem('currentUser')
    ? window[Symbol.for('basket-comp')].dispatchEvent(new Event('open-basket'))
    : window[Symbol.for('sign-up')].dispatchEvent(new Event('open-reg-form'))

  document.body.style.overflow = 'hidden'
}
