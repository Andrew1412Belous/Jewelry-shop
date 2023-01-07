export function checkCorrectInput (elems) {
  if (elems['payment-form'].style.display === 'none') {
    for (const key in elems) {
      if (!key.indexOf('input') && elems[key].id.indexOf('input-card') === -1) {
        if (elems[key].value === '' || elems[key].style.color === 'rgb(234, 56, 56)') {
          return false
        }
      }
    }
  } else {
    for (const key in elems) {
      if (!key.indexOf('input')) {
        if (elems[key].value === '' || elems[key].style.color === 'rgb(234, 56, 56)') {
          return false
        }
      }
    }
  }

  return true
}
