import { filterElemNames } from '../elemNames/catalog/filterElemNames'

export const filterElems = filterElemNames
  .map(filtersName => {
    return filtersName
      .map(id => ({[id]: document.getElementById(id)}))
      .reduce((res, link) => Object.assign(res, link), {})
  })


  // .map(id => ({ [id]: document.getElementById(id) }))
  // .reduce((res, link) => Object.assign(res, link), {})

// export const brandElems = brandElemNames
//   .map(id => ({ [id]: document.getElementById(id) }))
//   .reduce((res, link) => Object.assign(res, link), {})
//
// export const sexElems = brandElemNames
//   .map(id => ({ [id]: document.getElementById(id) }))
//   .reduce((res, link) => Object.assign(res, link), {})
//
// export const collectionELems = brandElemNames
//   .map(id => ({ [id]: document.getElementById(id) }))
//   .reduce((res, link) => Object.assign(res, link), {})
//
// export const brandElems = brandElemNames
//   .map(id => ({ [id]: document.getElementById(id) }))
//   .reduce((res, link) => Object.assign(res, link), {})
//
// export const brandElems = brandElemNames
//   .map(id => ({ [id]: document.getElementById(id) }))
//   .reduce((res, link) => Object.assign(res, link), {})

