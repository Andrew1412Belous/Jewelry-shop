export function setVerifyPasswordParams (color, disabled) {
  this.elems.password.style.color = color
  this.elems['verify-password'].disabled = disabled
}
