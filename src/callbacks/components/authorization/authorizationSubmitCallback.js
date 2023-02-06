import sha256 from 'sha256'

const { emailRValidation } = require('../../../configs/index')

const header = require('../../../components/pagesComponents/header').header
const defaultPicture = require('../../../assets/defaultPicture')

const {
  checkUserIsReal,
  setUserParams,
  hideAuthElems,
  currentUser,
  isInputEmpty,
} = require('../../../helpers/index')

export function authorizationSubmitCallback () {
  const test = isInputEmpty([this.elems.login, this.elems.password])

  if (test) {
    const correctInfo = checkUserIsReal(this.elems.login.value, sha256(this.elems.password.value))

    if (correctInfo) {
      this.elems.message.innerText = `Вітаю ${this.elems.login.value}`

      require('../../../helpers/index').getUser(this.elems.login.value)
        .then(response => {
          Object.assign(currentUser, Object.values(response)[0])

          sessionStorage.setItem('currentUser', JSON.stringify(currentUser))

          Object.assign(this.elems.picture, {
            src: currentUser.avatar || defaultPicture,
          })

          setUserParams(currentUser)

          header.setAttribute('entered', 'true')
        })

      hideAuthElems.call(this)
    } else if (this.elems.login.value.match(emailRValidation)) {
      require('../../../helpers/index').getUserByEmail(this.elems.login.value)
        .then(response => {
          if (Object.keys(response).length
            && response[Object.keys(response)[0]].password === sha256(this.elems.password.value)) {
            Object.assign(currentUser, Object.values(response)[0])

            sessionStorage.setItem('currentUser', JSON.stringify(currentUser))

            this.elems.message.innerText = `Вітаю ${response[Object.keys(response)[0]].login}`
            Object.assign(this.elems.picture, {
              src: currentUser.avatar || defaultPicture,
            })

            setUserParams(currentUser)

            header.setAttribute('entered', 'true')

            hideAuthElems.call(this)
          } else {
            this.elems.message.innerText = 'Неправильний логін або пароль!'
          }
        })
    } else {
      this.elems.message.innerText = 'Неправильний логін або пароль!'
    }
  } else {
    this.elems.message.innerText = 'Заповність усі поля!'
  }
}
