export function profileSignOutCallback () {
  require('../header/signOutCallback').signOutCallback()

  this.section.style.display = 'none'
}
