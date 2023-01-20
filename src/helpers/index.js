import { getElemsById } from './DOM/getElemsById'
import { getAllUsers } from './fetch/getAllUsers'
import { createUser } from './fetch/createUser'
import { patchUser } from './fetch/patchUser'
import { deleteUser } from './fetch/deleteUser'
import { getUser } from './fetch/getUser'
import { checkUserIsReal } from './components/authorizaion/checkUserIsReal'
import { hideAuthElems } from './components/authorizaion/hideAuthElems'
import { setVerifyPasswordParams } from './components/registration/setVerifyPasswordParams'
import { setPhoneParams } from './components/registration/setPhoneParams'
import { setProfileInputParams } from './components/profile/setProfileInputParams'
import { setProfileSecurityBlockParams } from './components/profile/setProfileSecurityInpusParams'
import { checkProfilePatchElem } from './components/profile/checkProfilePatchElem'
import { setInputMode } from './components/profile/setInputMode'
import { addElem } from './DOM/addElem'
import { getElemsByIdFromShadow } from './components/getElemsByIdFromShadow'
import { isInputEmpty } from './validation/forInputs/isInputEmpty'
import { setPasswordParams } from './validation/setPasswordParams'
import { readImageFromComp } from './components/readImageFromComp'
import { currentUser } from './components/profile/currentUser'
import { toggleDisplayElems } from './DOM/toggleDisplayElems'
import { checkCyrillicInputs } from './validation/forInputs/checkCyrillicInputs'
import { tabs } from './pages/mainPage/tabs/tabs'
import { tabsContent } from './pages/mainPage/tabs/tabsContent'
import { hideTabContent } from './pages/mainPage/tabs/hideTabContent'
import { showTabContent } from './pages/mainPage/tabs/showTabContent'
import { getUserByEmail } from './fetch/getUserByEmail'
import { showProducts } from './pages/catalogPage/catalog/showProducts'
import { setFiltersParam } from './pages/catalogPage/catalog/setFiltersParam'
import { setFilterClearParam } from './pages/catalogPage/catalog/setFilterClearParam'
import { hideProducts } from './pages/catalogPage/catalog/hideProducts'
import { setMoreProductsBtnMode } from './pages/catalogPage/catalog/setMoreProductsBtnMode'
import { checkNumberInputs } from './validation/forInputs/checkNumberInputs'
import { setPriceInputsParams } from './pages/catalogPage/catalog/setPriceInputsParams'
import { checkInputsEquality } from './validation/forInputs/checkInputsEquality'
import { setPriceFilter } from './pages/catalogPage/catalog/setPriceFilter'
import { sortByFilters } from './pages/catalogPage/catalog/sortByFilters'
import { sortByPrice } from './pages/catalogPage/catalog/sortByPrice'
import { sortByPriceAndFilters } from './pages/catalogPage/catalog/sortByPriceAndFilters'
import { setPageCallbacks } from './DOM/setPageCallbacks'
import { DOMContentLoadCallback } from './DOM/DOMContentLoadCallback'
import { windowLoadCallback } from './DOM/windowLoadCallback'
import { getProduct } from './pages/catalogPage/catalog/getProduct'
import { setPriceClearParam } from './pages/catalogPage/catalog/setPriceClearParam'
import { checkFilters } from './pages/catalogPage/catalog/checkFilters'
import { putUser } from './fetch/putUser'
import { insertFavoriteProducts } from './components/favorite/insertFavoriteProducts'
import { checkBasketProducts } from './components/basket/checkBasketProducts'
import { addToBasket } from './components/basket/addToBasket'
import { setFormParams } from './components/orderForm/setFormParams'
import { checkSpacesInString } from './components/orderForm/checkSpacesInString'

export {
  getElemsById,
  getAllUsers,
  addElem,
  getElemsByIdFromShadow,
  setVerifyPasswordParams,
  isInputEmpty,
  setPasswordParams,
  readImageFromComp,
  setPhoneParams,
  createUser,
  currentUser,
  getUser,
  checkUserIsReal,
  hideAuthElems,
  toggleDisplayElems,
  patchUser,
  checkCyrillicInputs,
  setProfileSecurityBlockParams,
  setInputMode,
  setProfileInputParams,
  deleteUser,
  checkProfilePatchElem,
  tabs,
  tabsContent,
  hideTabContent,
  showTabContent,
  getUserByEmail,
  showProducts,
  setFiltersParam,
  setFilterClearParam,
  hideProducts,
  setMoreProductsBtnMode,
  checkNumberInputs,
  setPriceInputsParams,
  checkInputsEquality,
  setPriceFilter,
  sortByFilters,
  sortByPrice,
  sortByPriceAndFilters,
  setPageCallbacks,
  DOMContentLoadCallback,
  windowLoadCallback,
  getProduct,
  setPriceClearParam,
  checkFilters,
  putUser,
  insertFavoriteProducts,
  checkBasketProducts,
  addToBasket,
  setFormParams,
  checkSpacesInString,
}
