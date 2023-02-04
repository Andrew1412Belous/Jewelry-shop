export function profileSettingCallback () {
  this.section.style.display = 'none'

  window[Symbol.for('personal-settings')].dispatchEvent(new Event('open-personal-settings'))
}
