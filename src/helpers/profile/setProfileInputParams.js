export function setProfileInputParams (color, disabled) {
  this.elems['input-security'].style.color = color
  this.elems['profile-security-submit-btn'].style.border = `solid 1px ${color}`
  this.elems['profile-security-submit-btn'].disabled = disabled
}
