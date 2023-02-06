const currentUser = require('./currentUser').currentUser

export function checkProfilePatchElem (elem, response) {
  if (elem.hasOwnProperty('login')) {
    localStorage.removeItem(currentUser.login)
    localStorage[response.login] = response.password

    this.elems.login.innerText = response.login
  } else if (elem.hasOwnProperty('password')) {
    localStorage.setItem(currentUser.login, response.password)
  }
}
