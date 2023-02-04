import './assets/css/preloader.css'
import './assets/css/style.css'

require('./components/index')

const {
  DOMContentLoadCallback,
  windowLoadCallback,
} = require('./callbacks/index')

if (!sessionStorage.length) {
  require('./helpers/fetch/getAllUsers').getAllUsers()
    .then(users => Object.keys(users)
      .forEach(key => localStorage.setItem(users[key].login, users[key].password)))
}

document.addEventListener('DOMContentLoaded', DOMContentLoadCallback)

window.onload = windowLoadCallback
