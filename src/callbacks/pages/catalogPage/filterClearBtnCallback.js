export function filterClearBtnCallback (event) {
  const listName = event.target.id.split('-')[0]

  if (listName === 'price') {
    require('../../../helpers/pages/catalogPage/setClearButtonParams').setPriceClearParam()
  } else {
    require('../../../helpers/pages/catalogPage/setClearButtonParams').setFilterClearParam(listName)
  }
}
