const { filterBlocks } = require('../../../configs/index')

export function filterButtonCallback (event) {
  const blockName = event.target.id.split('-')[0]

  filterBlocks.blocksNames.forEach(filter => {
    if (!filter.indexOf(blockName)) {
      filterBlocks.blocksElems[filter].classList.toggle('filter-list-hide')
      filterBlocks.blocksElems[filter].classList.toggle('filter-list-show')
    } else {
      filterBlocks.blocksElems[filter].classList.add('filter-list-hide')
      filterBlocks.blocksElems[filter].classList.remove('filter-list-show')
    }
  })
}
