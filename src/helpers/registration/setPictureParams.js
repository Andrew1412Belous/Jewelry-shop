export function setPictureParams (color, display) {
  this.elems.avatar.style.display = display
  this.elems.picture.style.display = display
  this.elems['verify-password'].style.color = color
}
