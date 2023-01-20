import {
  changeProfileIcon,
  checkCyrillicInputs,
  isInputEmpty,
  currentUser,
  patchUser,
} from '../../../helpers'

export function profileSubmitCallback () {
  const test = isInputEmpty([this.elems['input-patronymic'], this.elems['input-name'], this.elems['input-surname']])

  if (test) {
    const correctInput = checkCyrillicInputs([this.elems['input-patronymic'], this.elems['input-name'], this.elems['input-surname']])

    if (correctInput) {
      Object.assign(this.elems.message, {
        innerText: 'Зміни збережено',
        style: `
          color: #fff;
      `,
      })

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

          changeProfileIcon(currentUser.avatar)

          setTimeout(() => this.elems.message.innerText = '', 1000)
        })
    } else {
      Object.assign(this.elems.message, {
        innerText: 'Будь ласка введіть поля кирилицею!',
        style: `
          color: #ea3838;
      `,
      })
    }
  } else {
    Object.assign(this.elems.message, {
      innerText: 'Заповність усі поля!',
      style: `
        color: #ea3838;
      `,
    })
  }
}
