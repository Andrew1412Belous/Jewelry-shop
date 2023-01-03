import {
  documentKeyDownCallback,
  DOMContentLoadCallback,
  getAllUsers,
  windowLoadCallback,
} from './helpers'

if (!localStorage.length) {
  getAllUsers()
    .then(users => Object.keys(users)
      .forEach(key => localStorage.setItem(users[key].login, users[key].password)))
}


document.addEventListener('DOMContentLoaded', DOMContentLoadCallback)

document.onkeydown = documentKeyDownCallback

window.onload = windowLoadCallback
