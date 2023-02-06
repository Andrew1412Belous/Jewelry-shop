import './assets/css/preloader.css'
import './assets/css/style.css'

require('./components/index')

const {
  DOMContentLoadCallback,
  windowLoadCallback,
} = require('./callbacks/index')

document.addEventListener('DOMContentLoaded', DOMContentLoadCallback)

window.onload = windowLoadCallback

if (!localStorage.length) {
  require('./helpers/index').getAllUsers()
    .then(users => Object.keys(users)
      .forEach(key => localStorage.setItem(users[key].login, users[key].password)))
}
