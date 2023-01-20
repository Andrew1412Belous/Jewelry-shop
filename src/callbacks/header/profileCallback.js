export function profileCallback () {
  sessionStorage.getItem('currentUser')
    ? window[Symbol.for('profile-comp')].dispatchEvent(new Event('open-profile'))
    : window[Symbol.for('sign-up')].dispatchEvent(new Event('open-reg-form'))

  document.body.style.overflow = 'hidden'
}
