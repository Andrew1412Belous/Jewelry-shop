import {filterShowBtns, filtersShowButtonNames} from '../../../../configs'

export function setPriceInputsParams (inputs, color) {
  inputs.forEach(input => {
    Object.assign(input, {
      style: `
        border: 2px solid ${color};
        color: ${color};
      `,
    })
  })
}
