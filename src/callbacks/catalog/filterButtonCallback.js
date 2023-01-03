import {
  filterBlocks,
  filterBlocksNames,
} from '../../configs'

export function filterButtonCallback (event) {
  const blockName = event.target.id.split('-')[0]

  filterBlocksNames.forEach(filter => {
    if (!filter.indexOf(blockName)) {
      filterBlocks[filter].classList.toggle('filter-list-hide')
      filterBlocks[filter].classList.toggle('filter-list-show')
    } else {
      filterBlocks[filter].classList.add('filter-list-hide')
      filterBlocks[filter].classList.remove('filter-list-show')
    }
  })
}
