export function checkSpacesInString (string, num) {
  return string.split('').filter((letter, index, array) => {
    if (letter === ' ' && array[index - 1] && array[index + 1]) {
      return letter
    }
  }).length === num
}
