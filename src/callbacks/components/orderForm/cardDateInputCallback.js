export function cardDateInputCallback (event) {
  const value = event.target.value.split('-')
  value[1] = Number(value[1] - 1)

  const valueDate = new Date(...value).getTime()
  const date = new Date().getTime()

  event.target.style.color = valueDate > date
    ? '#50a450'
    : '#ea3838'
}
