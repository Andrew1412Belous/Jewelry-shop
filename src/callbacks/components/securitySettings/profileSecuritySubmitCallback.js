import {
  checkProfilePatchElem,
  currentUser,
  deleteUser, patchUser,
  setInputMode,
} from '../../../helpers'

export function profileSecuritySubmitCallback (event) {
  const mode = setInputMode(this.elems['security-text'])

  const elem = mode === 'delete' ? false : { [mode]: this.elems['input-security'].value }

  if (!elem) {
    deleteUser(currentUser.id)
      .then(() => {
        sessionStorage.removeItem('currentUser')
        localStorage.removeItem(currentUser.login)

        for (const key in currentUser) {
          delete currentUser[key]
        }

        // changeProfileIcon(defaultProfileAvatar)
        // toggleDisplayHeaderLinks(true)
        // (false)
      })
  } else {
    Object.assign(this.elems['security-message'], {
      innerText: 'Зміни збережено',
      style: `
          color: #fff;
      `,
    })

    patchUser(currentUser.id, {
      ...elem,
    })
      .then(response => {
        checkProfilePatchElem.call(this, elem, response)

        Object.assign(currentUser, response)
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
      })

    setTimeout(() => this.elems['security-message'].innerText = '', 500)
    this.elems['security-block'].style.display = 'none'
  }
}
