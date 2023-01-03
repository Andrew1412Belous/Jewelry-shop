import {
  currentUser, setProfileSecurityBlockParams,
  toggleDisplayElems,
} from '../../helpers'

export function newEmailBtnCallback () {
  Object.assign( this.elems['security-message'], {
    innerText: '',
    style: `
      color: #fff;
    `,
  })

  setProfileSecurityBlockParams.call(this, 'Новий email', 'Встановити email', currentUser.email ? currentUser.email : '')

  toggleDisplayElems([this.elems['security-block'], this.elems['input-security']], true)
}
