import { filterElemNames } from './filterElemNames'
import { getElemsById } from '../../../helpers'

export const filterElems = filterElemNames
  .map(filtersName => getElemsById(filtersName))
