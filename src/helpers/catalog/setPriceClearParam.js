import { priceElemNames, priceElems } from '../../configs'

export function setPriceClearParam () {
  priceElemNames.forEach(input => {
    Object.assign(priceElems[input], {
      style: `
          border: 2px solid #D6D6D6;
          color: #979797ж
        `,
      value: '',
    })
  })

  sessionStorage.removeItem('price')
}
