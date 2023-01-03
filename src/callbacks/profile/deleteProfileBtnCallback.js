import {
  currentUser,
  setProfileSecurityBlockParams,
  toggleDisplayElems,
} from '../../helpers'

export function deleteProfileBtnCallback () {
  Object.assign( this.elems['security-message'], {
    innerText: '',
    style: `
      color: #fff;
    `,
  })

  setProfileSecurityBlockParams.call(this, 'Ви впевнені?', 'Видалити аккаунт', currentUser.email ? currentUser.email : '')
  this.elems['profile-security-submit-btn'].disabled = false

  toggleDisplayElems([this.elems['input-security']], false)
  toggleDisplayElems([this.elems['security-block']], true)
}
