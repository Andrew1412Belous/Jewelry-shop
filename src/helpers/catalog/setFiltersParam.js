import { filterElemNames, filterElems } from '../../configs'

export function setFiltersParam () {
  return filterElemNames
    .reduce((result, filter) => {
      if (filterElems[filter].checked) {
        result.push(filter.split('-')[0])
      }
      return result
    }, [])
}
