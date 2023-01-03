import {
  setProfileSecurityBlockParams,
  toggleDisplayElems,
} from '../../helpers'

export function newPasswordBtnCallback () {
  Object.assign( this.elems['security-message'], {
    innerText: '',
    style: `
      color: #fff;
    `,
  })
  setProfileSecurityBlockParams.call(this, 'Новий пароль', 'Встановити пароль')

  toggleDisplayElems([this.elems['security-block'], this.elems['input-security']], true)
}
