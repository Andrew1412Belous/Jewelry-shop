export function setPasswordParams (color, disabled, text) {
  this.elems.login.style.color = color
  this.elems.password.disabled = disabled
  this.elems.message.innerText = text
}
