export function catalogLinkClickCallback (event) {
  event.preventDefault()

  const filters = event.target.id.split('-')
    .map(filter => `${filter}-checkbox`)

  sessionStorage.setItem('filters', JSON.stringify(filters))

  document.location = './catalog.html'
}
