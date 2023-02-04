export function emitMessage (title, text) {
  window[Symbol.for('message-popup')].dispatchEvent(new CustomEvent('open-message-popup', {
    detail: {
      title,
      text,
    },
  }))
}
