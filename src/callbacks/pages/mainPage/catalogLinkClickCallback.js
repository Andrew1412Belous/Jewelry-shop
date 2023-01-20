export function catalogLinkClickCallback (event) {
  event.preventDefault()

  const filters = event.target.id.indexOf('-')
    ? event.target.id.split('-')
      .map(filter => [`${filter}-checkbox`])
    : [event.target.id]

  console.log(filters)

  sessionStorage.setItem('filters', JSON.stringify(filters))

  document.location = './catalog.html'
}
