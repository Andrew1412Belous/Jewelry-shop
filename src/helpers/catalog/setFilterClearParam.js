import {
  filterListElemNames,
  filterListElems,
} from '../../configs'

export function setFilterClearParam (nameList) {
  for (const list of filterListElemNames) {
    if (!list.indexOf(nameList)) {
      filterListElems[list].querySelectorAll('.checkbox')
        .forEach(input => input.checked = false)
    }
  }
}
