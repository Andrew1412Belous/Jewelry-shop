import {
  currentUser,
  setProfileSecurityBlockParams,
  toggleDisplayElems,
} from '../../helpers'

export function newLoginBtnCallback () {
  Object.assign( this.elems['security-message'], {
    innerText: '',
    style: `
      color: #fff;
    `,
  })

  setProfileSecurityBlockParams.call(this, 'Новий логін', 'Встановити логін', currentUser.login)

  toggleDisplayElems([this.elems['security-block'], this.elems['input-security']], true)
}
