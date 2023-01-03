import sha256 from 'sha256'

import {
  changeProfileIcon,
  checkInputs,
  checkUserIsReal,
  currentUser,
  getUser, getUserByEmail,
  hideAuthElems, toggleDisplayHeaderLinks,
} from '../../helpers'

import { emailRRegExp } from '../../configs'
import { defaultPicture } from '../../assets'
import {setFavoriteProducts} from '../../helpers/authorizaion/setFavoriteProducts'
import { setBasketProducts } from '../../helpers/basket/setBasketProducts'

export function authorizationSubmitCallback () {
  const test = checkInputs([this.elems.login, this.elems.password])

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

          setFavoriteProducts(currentUser)
          setBasketProducts(currentUser)

          changeProfileIcon(currentUser.avatar)
        })

      hideAuthElems.call(this)
      toggleDisplayHeaderLinks(false)
    } else if (this.elems.login.value.match(emailRRegExp)) {
      getUserByEmail(this.elems.login.value)
        .then(response => {
          // eslint-disable-next-line max-len
          if (Object.keys(response).length && response[Object.keys(response)[0]].password === sha256(this.elems.password.value)) {
            Object.assign(currentUser, Object.values(response)[0])

            sessionStorage.setItem('currentUser', JSON.stringify(currentUser))

            this.elems.message.innerText = `Вітаю ${response[Object.keys(response)[0]].login}`
            Object.assign(this.elems.picture, {
              src: currentUser.avatar || defaultPicture,
            })

            setFavoriteProducts(currentUser)
            setBasketProducts(currentUser)

            changeProfileIcon(currentUser.avatar)

            hideAuthElems.call(this)
            toggleDisplayHeaderLinks(false)
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
