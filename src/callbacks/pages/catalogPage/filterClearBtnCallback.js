const { setFilterClearParam, setPriceClearParam } = require('../../../helpers/pages/catalogPage/setClearButtonParams')

export function filterClearBtnCallback (event) {
  const listName = event.target.id.split('-')[0]

  if (listName === 'price') {
    setPriceClearParam()
  } else {
    setFilterClearParam(listName)
  }
}
