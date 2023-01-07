import { currentUser } from '../profile/currentUser'

export function setFormParams (elems) {
  if (currentUser.personalInfo) {
    elems['input-name'].value = currentUser.personalInfo.name
    elems['input-surname'].value = currentUser.personalInfo.surname
    elems['input-patronymic'].value = currentUser.personalInfo.patronymic
  }

  elems['payment-form'].style.display = elems.live.checked
    ? 'none'
    : 'flex'
}
