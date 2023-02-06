module.exports = {
  getAllUsers: require('./fetch/getAllUsers').getAllUsers,
  getAllProducts: require('./fetch/getAllProducts').getAllProducts,
  createUser: require('./fetch/createUser').createUser,
  patchUser: require('./fetch/patchUser').patchUser,
  putUser: require('./fetch/putUser').putUser,
  getUser: require('./fetch/getUser').getUser,
  getUserByEmail: require('./fetch/getUserByEmail').getUserByEmail,
  deleteUser: require('./fetch/deleteUser').deleteUser,

  getElemsById: require('./DOM/getElemsById').getElemsById,
  addElem: require('./DOM/addElem').addElem,
  setPageFunction: require('./DOM/setPageFunction').setPageFunction,

  setFiltersParam: require('./pages/catalogPage/setFiltersParam').setFiltersParam,
  setPriceInputsParams: require('./pages/catalogPage/setPriceInputsParams').setPriceInputsParams,
  sortByPriceAndFilters: require('./pages/catalogPage/sortByPriceAndFilters').sortByPriceAndFilters,
  sortByFilters: require('./pages/catalogPage/sortByFilters').sortByFilters,
  sortByPrice: require('./pages/catalogPage/sortByPrice').sortByPrice,
  hideProducts: require('./pages/catalogPage/hideProducts').hideProducts,
  showProducts: require('./pages/catalogPage/showProducts').showProducts,
  setMoreProductsBtnMode: require('./pages/catalogPage/setMoreProductsBtnMode').setMoreProductsBtnMode,

  currentProduct: require('./pages/productPage/currentProduct').currentProduct,

  setProductsParams: require('./components/setProductsParams').setProductsParams,
  signOutClearInfo: require('./pages/catalogPage/signOutClearInfo').signOutClearInfo,
  getElemsByIdFromShadow: require('./components/getElemsByIdFromShadow').getElemsByIdFromShadow,

  getProduct: require('./components/getProduct').getProduct,
  setFilterClass: require('./components/productCard/setFilterClass').setFilterClass,

  favoriteProducts: require('./components/favorite/favoriteProducts').favoriteProducts,
  deleteFromFavorite: require('./components/favorite/deleteFromFavorite').deleteFromFavorite,
  checkFavoriteProducts: require('./components/favorite/checkFavoriteProducts').checkFavoriteProducts,
  insertFavoriteProducts: require('./components/favorite/insertFavoriteProducts').insertFavoriteProducts,
  addToFavorite: require('./components/favorite/addToFavorite').addToFavorite,

  checkUserIsReal: require('./components/authorizaion/checkUserIsReal').checkUserIsReal,
  setUserParams: require('./components/authorizaion/setUserParams').setUserParams,
  hideAuthElems: require('./components/authorizaion/hideAuthElems').hideAuthElems,

  setPhoneParams: require('./components/registration/setPhoneParams').setPhoneParams,

  currentUser: require('./components/profile/currentUser').currentUser,

  setProfileSecurityBlockParams: require('./components/securitySettings/setProfileSecurityInpusParams').setProfileSecurityBlockParams,

  updateCatalogFilters: require('./components/search/updateCatalogFilters').updateCatalogFilters,
  checkSearchFilter: require('./components/search/checkSearchFilter').checkSearchFilter,

  basketProducts: require('./components/basket/basketProducts').basketProducts,
  checkBasketProducts: require('./components/basket/checkBasketProducts').checkBasketProducts,
  insertBasketProducts: require('./components/basket/insertBasketProducts').insertBasketProducts,
  addToBasket: require('./components/basket/addToBasket').addToBasket,
  checkSameProductInBasket: require('./components/basket/checkSameProductInBasket').checkSameProductInBasket,

  insertOrderProducts: require('./components/orderForm/insertOrderProducts').insertOrderProducts,
  setFormParams: require('./components/orderForm/setFormParams').setFormParams,

  setPriceType: require('./components/setPriceType').setPriceType,
  emitError: require('./components/emitError').emitError,
  readImageFromComp: require('./components/readImageFromComp').readImageFromComp,

  checkProfilePatchElem: require('./components/profile/checkProfilePatchElem').checkProfilePatchElem,
  setInputMode: require('./components/securitySettings/setInputMode').setInputMode,
  setProfileInputParams: require('./components/securitySettings/setProfileInputParams').setProfileInputParams,

  orderHistoryProducts: require('./components/orderHistory/orderHistoryProducts').orderHistoryProducts,
  insertOrderHistoryProducts: require('./components/orderHistory/insertOrderHistoryProducts').insertOrderHistoryProducts,

  setVerifyPasswordParams: require('./components/registration/setVerifyPasswordParams').setVerifyPasswordParams,
  checkCorrectInput: require('./components/orderForm/checkCorrectInput').checkCorrectInput,
  isInputEmpty: require('./validation/forInputs/isInputEmpty').isInputEmpty,
  checkInputsEquality: require('./validation/forInputs/checkInputsEquality').checkInputsEquality,
  checkSpacesInString: require('./validation/forInputs/checkSpacesInString').checkSpacesInString,
  setPasswordParams: require('./validation/setPasswordParams').setPasswordParams,
  checkCyrillicInputs: require('./validation/forInputs/checkCyrillicInputs').checkCyrillicInputs,
}
