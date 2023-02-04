export function windowLoadCallback () {
  const mask = document.getElementById('mask')
  mask.classList.toggle('hide-mask')

  setTimeout(() => mask.remove(), 200)
}
