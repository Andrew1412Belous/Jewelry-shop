import {
  checkCyrillicInputs,
  isInputEmpty,
  currentUser,
  patchUser,
} from '../../../helpers'

const header = require('../../../components/pagesComponents/header').header

export function profileSubmitCallback () {
  const test = isInputEmpty([this.elems['input-patronymic'], this.elems['input-name'], this.elems['input-surname']])
  const isAvatarChanged = currentUser.avatar === this.elems.picture.src
  const correctInput = checkCyrillicInputs([this.elems['input-patronymic'], this.elems['input-name'], this.elems['input-surname']])

  if (test && correctInput || !isAvatarChanged) {
    Object.assign(this.elems.message, {
      innerText: 'Зміни збережено',
      style: `
        color: #fff;
    `,
    })

    setTimeout(() => this.elems.message.innerText = '', 1000)

    patchUser(currentUser.id, {
      avatar: this.elems.picture.src,
      personalInfo: {
        name: this.elems['input-name'].value,
        surname: this.elems['input-surname'].value,
        patronymic: this.elems['input-patronymic'].value,
        phone: this.elems['input-phone'].value,
      },
    })
      .then(response => {
        Object.assign(currentUser, response)
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))

        header.setAttribute('changed', 'true')
      })
  } else {
    Object.assign(this.elems.message, {
      innerText: 'Заповність усі поля кирилицею!',
      style: `
        color: #ea3838;
      `,
    })

    setTimeout(() => this.elems.message.innerText = '', 1000)
  }
}
