import { filterBlocksNames } from '../elemNames/catalog/filterBlocksNames'

export const filterBlocks = filterBlocksNames
  .map(id => ({ [id]: document.getElementById(id) }))
  .reduce((res, link) => Object.assign(res, link), {})
