import {
  setInputMode,
  currentUser,
} from '../../../helpers'

export function profileSecuritySubmitCallback (template) {
  const mode = setInputMode(this.elems['security-text'])

  const elem = mode === 'delete' ? false : { [mode]: this.elems['input-security'].value }

  if (!elem) {
    require('../../../helpers/index').deleteUser(currentUser.id)
      .then(() => {
        sessionStorage.removeItem('currentUser')
        localStorage.removeItem(currentUser.login)

        for (const key in currentUser) {
          delete currentUser[key]
        }

        require('../../../components/pagesComponents/header')
          .header.setAttribute('entered', 'false')

        require('../hideUpdatingComp').hideUpdatingComp.bind(this, template)()
      })
  } else {
    Object.assign(this.elems['security-message'], {
      innerText: 'Зміни збережено',
      style: `
          color: #fff;
      `,
    })

    require('../../../helpers/index').patchUser(currentUser.id, {
      ...elem,
    })
      .then(response => {
        require('../../../helpers/index').checkProfilePatchElem.call(this, elem, response)

        Object.assign(currentUser, response)
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
      })

    setTimeout(() => this.elems['security-message'].innerText = '', 500)
    this.elems['security-block'].style.display = 'none'
  }
}
