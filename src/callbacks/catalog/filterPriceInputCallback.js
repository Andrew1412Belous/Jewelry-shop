import {
  checkInputs,
  checkInputsEquality,
  checkNumberInputs,
  setPriceInputsParams,
} from '../../helpers'

import { priceElems } from '../../configs'

export function filterPriceInputCallback () {
  const test = checkInputs([priceElems['price-to'], priceElems['price-from']])
    && checkNumberInputs([priceElems['price-to'], priceElems['price-from']])
    && checkInputsEquality(priceElems['price-to'], priceElems['price-from'])

  test
    ? setPriceInputsParams([priceElems['price-to'], priceElems['price-from']], '#50a450', false)
    : setPriceInputsParams([priceElems['price-to'], priceElems['price-from']], '#ea3838', true)
}
