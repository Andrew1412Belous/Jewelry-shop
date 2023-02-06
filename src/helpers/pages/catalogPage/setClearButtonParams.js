const { listNames, listElems } = require('../../../configs/pages/catalogPage/filterListElems')
const { prices } = require('../../../configs/index')

export function setFilterClearParam (nameList) {
  for (const list of listNames) {
    if (!list.indexOf(nameList)) {
      listElems[list].querySelectorAll('.checkbox')
        .forEach(input => input.checked = false)
    }
  }
}

export function setPriceClearParam () {
  prices.priceNames.forEach(input => {
    Object.assign(prices.priceElems[input], {
      style: `
          border: 2px solid #D6D6D6;
          color: #979797ж
        `,
      value: '',
    })
  })

  sessionStorage.removeItem('price')
}
