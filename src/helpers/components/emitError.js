export function emitError (title, text) {
  window[Symbol.for('error-popup')].dispatchEvent(new CustomEvent('open-error-popup', {
    detail: {
      title,
      text,
    },
  }))
}
