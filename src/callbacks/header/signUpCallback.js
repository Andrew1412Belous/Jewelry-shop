export function signUpCallback () {
  window[Symbol.for('sign-up')].dispatchEvent(new Event('open-reg-form'))

  document.body.style.overflow = 'hidden'
}
