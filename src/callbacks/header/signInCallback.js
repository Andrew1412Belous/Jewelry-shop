export function signInCallback () {
  window[Symbol.for('sign-in')].dispatchEvent(new Event('open-auth-form'))

  document.body.style.overflow = 'hidden'
}
