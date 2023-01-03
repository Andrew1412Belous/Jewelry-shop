import {
  setFilterClearParam,
  setPriceClearParam,
} from '../../helpers'

export function filterClearBtnCallback (event) {
  const listName = event.target.id.split('-')[0]

  if (listName === 'price') {
    setPriceClearParam()
  } else {
    setFilterClearParam(listName)
  }
}
