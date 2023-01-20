export function favoriteCallback () {
  sessionStorage.getItem('currentUser')
    ? window[Symbol.for('favorite-comp')].dispatchEvent(new Event('open-favorite'))
    : window[Symbol.for('sign-up')].dispatchEvent(new Event('open-reg-form'))
}
