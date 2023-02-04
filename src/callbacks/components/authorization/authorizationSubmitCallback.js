import sha256 from 'sha256'

const getUser = require('../../../helpers/fetch/getUser').getUser
const checkUserIsReal = require('../../../helpers/components/authorizaion/checkUserIsReal').checkUserIsReal
const getUserByEmail = require('../../../helpers/fetch/getUserByEmail').getUserByEmail
const setUserParams = require('../../../helpers/components/authorizaion/setUserParams').setUserParams
const emailRValidation = require('../../../configs/validation/emailRValidation').emailRValidation
const hideAuthElems = require('../../../helpers/components/authorizaion/hideAuthElems').hideAuthElems

const currentUser = require('../../../helpers/components/profile/currentUser').currentUser
const header = require('../../../components/pagesComponents/header').header
const defaultPicture = require('../../../assets/defaultPicture')

export function authorizationSubmitCallback () {
  const test = require('../../../helpers/validation/forInputs/isInputEmpty')
    .isInputEmpty([this.elems.login, this.elems.password])

  if (test) {
    const correctInfo = checkUserIsReal(this.elems.login.value, sha256(this.elems.password.value))

    if (correctInfo) {
      this.elems.message.innerText = `Вітаю ${this.elems.login.value}`

      getUser(this.elems.login.value)
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
      getUserByEmail(this.elems.login.value)
        .then(response => {
          // eslint-disable-next-line max-len
          if (Object.keys(response).length
            && response[Object.keys(response)[0]].password === sha256(this.elems.password.value)) {
            Object.assign(currentUser, Object.values(response)[0])

            sessionStorage.setItem('currentUser', JSON.stringify(currentUser))

            this.elems.message.innerText = `Вітаю ${response[Object.keys(response)[0]].login}`
            Object.assign(this.elems.picture, {
              src: currentUser.avatar || defaultPicture,
            })

            setUserParams(currentUser)

            hideAuthElems.call(this)
            header.setAttribute('entered', 'true')
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
