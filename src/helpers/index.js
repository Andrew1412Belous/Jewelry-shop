import { getElemsById } from './DOM/getElemsById'
import { createUser } from './fetch/createUser'
import { patchUser } from './fetch/patchUser'
import { deleteUser } from './fetch/deleteUser'
import { getUser } from './fetch/getUser'
import { setProfileInputParams } from './components/profile/setProfileInputParams'
import { setProfileSecurityBlockParams } from './components/profile/setProfileSecurityInpusParams'
import { checkProfilePatchElem } from './components/profile/checkProfilePatchElem'
import { setInputMode } from './components/profile/setInputMode'
import { addElem } from './DOM/addElem'
import { getElemsByIdFromShadow } from './components/getElemsByIdFromShadow'
import { isInputEmpty } from './validation/forInputs/isInputEmpty'
import { readImageFromComp } from './components/readImageFromComp'
import { currentUser } from './components/profile/currentUser'
import { checkCyrillicInputs } from './validation/forInputs/checkCyrillicInputs'
import { setFiltersParam } from './pages/catalogPage/setFiltersParam'
import { checkNumberInputs } from './validation/forInputs/checkNumberInputs'
import { setPriceFilter } from './pages/catalogPage/setPriceFilter'
import { getProduct } from './pages/catalogPage/getProduct'
import { putUser } from './fetch/putUser'
import { insertFavoriteProducts } from './components/favorite/insertFavoriteProducts'
import { checkBasketProducts } from './components/basket/checkBasketProducts'
import { addToBasket } from './components/basket/addToBasket'
import { checkSpacesInString } from './components/orderForm/checkSpacesInString'

export {
  getElemsById,
  addElem,
  getElemsByIdFromShadow,
  isInputEmpty,
  readImageFromComp,
  createUser,
  currentUser,
  getUser,
  patchUser,
  checkCyrillicInputs,
  setProfileSecurityBlockParams,
  setInputMode,
  setProfileInputParams,
  deleteUser,
  checkProfilePatchElem,
  setFiltersParam,
  checkNumberInputs,
  setPriceFilter,
  getProduct,
  putUser,
  insertFavoriteProducts,
  checkBasketProducts,
  addToBasket,
  checkSpacesInString,
}
