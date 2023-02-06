export function searchCallback () {
  window[Symbol.for('search-component')].dispatchEvent(new Event('open-search'))

  document.body.style.overflow = 'hidden'
}
