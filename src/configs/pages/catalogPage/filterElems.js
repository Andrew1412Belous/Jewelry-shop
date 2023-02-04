const getElemsById = require('../../../helpers/DOM/getElemsById').getElemsById

export const brandElemNames = [
  'Versacci-checkbox',
  'Trebbo-checkbox',
  'Jewelry-checkbox',
  'VIP-checkbox',
  'Dolce-checkbox',
]

export const sexElemNames = [
  'male-checkbox',
  'female-checkbox',
  'both-checkbox',
]

export const collectionElenNames = [
  '2022-checkbox',
  '2021-checkbox',
  '2020-checkbox',
  'ring-checkbox',
  'bracelet-checkbox',
  'earrings-checkbox',
  'pendants-checkbox',
  'cufflinks-checkbox',
  'clocks-checkbox',
]

export const seasonElemNames = [
  'summer-checkbox',
  'autumn-checkbox',
  'winter-checkbox',
  'spring-checkbox',
]

export const eventElemNames = [
  'wedding-checkbox',
  'birthday-checkbox',
  'date-checkbox',
]

export const filterElemNames = [
  brandElemNames,
  sexElemNames,
  seasonElemNames,
  collectionElenNames,
  eventElemNames,
]

export const filterElems = filterElemNames
  .map(filtersName => getElemsById(filtersName))
