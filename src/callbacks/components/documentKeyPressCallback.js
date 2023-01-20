import { hideComponentCallback } from './hideComponentCallback'

export function documentKeyPressCallback (template, event) {
  if (event.code === 'Escape') hideComponentCallback.bind(this, template)()
}
