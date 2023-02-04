export function documentKeyPressCallback (template, event) {
  if (event.code === 'Escape') {
    require('./hideComponentCallback').hideComponentCallback.bind(this, template)()
  }
}
