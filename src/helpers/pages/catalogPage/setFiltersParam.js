const { filterElemNames, filterElems } = require('../../../configs/pages/catalogPage/filterElems')

export function setFiltersParam () {
  return filterElemNames
    .map((filtersName, index) => filtersName
      .reduce((result, filter) => {
        if (filterElems[index][filter].checked) {
          result.push(filter.split('-')[0])
        }
        return result
      }, []))
    .filter(item => item.length)
}
