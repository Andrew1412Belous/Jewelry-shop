module.exports = {
  DOMContentLoadCallback: require('./pages/DOMContentLoadCallback').DOMContentLoadCallback,
  windowLoadCallback: require('./pages/windowLoadCallback').windowLoadCallback,
  setPageCallbacks: require('../helpers/DOM/setPageFunction').setPageFunction,

  hideComponentCallback: require('./components/hideComponentCallback').hideComponentCallback,
  hideUpdatingComp: require('./components/hideUpdatingComp').hideUpdatingComp,

  signUpCallback: require('./components/header/signUpCallback').signUpCallback,
  signInCallback: require('./components/header/signInCallback').signInCallback,
  signOutCallback: require('./components/header/signOutCallback').signOutCallback,
  profileCallback: require('./components/header/profileCallback').profileCallback,
  favoriteCallback: require('./components/header/favoriteCallback').favoriteCallback,
  basketCallback: require('./components/header/basketCallback').basketCallback,
  searchCallback: require('./components/header/searchCallback').searchCallback,
  headerLogoClickCallback: require('./components/header/headerLogoClickCallback').headerLogoClickCallback,

  registrationAuthLinkCallback: require('./components/registration/registrationAuthLinkCallback').registrationAuthLinkCallback,
  registrationLoginCallback: require('./components/registration/registrationLoginCallback').registrationLoginCallback,
  registrationPasswordCallback: require('./components/registration/registrationPasswordCallback').registrationPasswordCallback,
  registrationVerifyPasswordCallback: require('./components/registration/registrationVerifyPasswordCallback').registrationVerifyPasswordCallback,
  registrationSubmitCallback: require('./components/registration/registrationSubmitCallback').registrationSubmitCallback,
  registrationPhoneInputCallback: require('./components/registration/registrationPhoneInputCallback').registrationPhoneInputCallback,

  authorizationPasswordCallback: require('./components/authorization/authorizationPasswordCallback').authorizationPasswordCallback,
  authorizationSubmitCallback: require('./components/authorization/authorizationSubmitCallback').authorizationSubmitCallback,
  authorizationRegLinkCallback: require('./components/authorization/authorizationRegLinkCallback').authorizationRegLinkCallback,

  productMouseLeaveCallback: require('./components/productCard/productMouseLeaveCallback').productMouseLeaveCallback,
  productMouseEnterCallback: require('./components/productCard/productMouseEnterCallback').productMouseEnterCallback,
  addToFavoriteCallback: require('./components/productCard/addToFavoriteCallback').addToFavoriteCallback,
  productPriceCallback: require('./components/productCard/productPriceCallback').productPriceCallback,

  favoriteBackBtnCallback: require('./components/favorite/favoriteBackBtnCallback').favoriteBackBtnCallback,
  favoriteDeleteProductCallback: require('./components/favorite/favoriteDeleteProductCallback').favoriteDeleteProductCallback,
  favoriteAddToBasketCallback: require('./components/favorite/favoriteAddToBasketCallback').favoriteAddToBasketCallback,

  basketDeleteProductCallback: require('./components/basket/basketDeleteProductCallback').basketDeleteProductCallback,
  buyProductsCallback: require('./components/basket/buyProductsCallback').buyProductsCallback,
  showProductPageCallback: require('./components/basket/showProductPageCallback').showProductPageCallback,
  basketDecrBtnCallback: require('./components/basket/basketDecrBtnCallback').basketDecrBtnCallback,
  basketIncrBtnCallback: require('./components/basket/basketIncrBtnCallback').basketIncrBtnCallback,

  profileFavoriteCallback: require('./components/profile/profileFavoriteCallback').profileFavoriteCallback,
  profileSignOutCallback: require('./components/profile/profileSignOutCallback').profileSignOutCallback,
  profileSettingsCallback: require('./components/profile/profileSettingCallback').profileSettingCallback,
  profileOrderHistoryCallback: require('./components/profile/profileOrderHistoryCallback').profileOrderHistoryCallback,

  setCyrillicInputParamsCallback: require('./components/orderForm/setCyrillicInputParamsCallback').setCyrillicInputParamsCallback,
  orderBackBtnCallback: require('./components/orderForm/orderBackBtnCallback').orderBackBtnCallback,
  telInputCallback: require('./components/orderForm/telInputCallback').telInputCallback,
  addressInputCallback: require('./components/orderForm/addressInputCallback').addressInputCallback,
  cardCheckClickCallback: require('./components/orderForm/cardCheckClickCallback').cardCheckClickCallback,
  cardNumberInputCallback: require('./components/orderForm/cardNumberInputCallback').cardNumberInputCallback,
  cardNameInputCallback: require('./components/orderForm/cardNameInputCallback').cardNameInputCallback,
  cardDateInputCallback: require('./components/orderForm/cardDateInputCallback').cardDateInputCallback,
  cardCvvInputCallback: require('./components/orderForm/cardCvvInputCallback').cardCvvInputCallback,
  buyAllProductsBtnCallback: require('./components/orderForm/buyAllProductsBtnCallback').buyAllProductsBtnCallback,

  securitySettingsBtn: require('./components/personalSettings/securitySettingsBtn').securitySettingsBtn,
  profileSubmitCallback: require('./components/personalSettings/profileSubmitCallback').profileSubmitCallback,
  resetPhoneBtnCallback: require('./components/personalSettings/resetPhoneBtnCallback').resetPhoneBtnCallback,

  personalDataBtn: require('./components/securitySettings/personalDataBtn').personalDataBtn,
  newEmailBtnCallback: require('./components/securitySettings/newEmailBtnCallback').newEmailBtnCallback,
  newLoginBtnCallback: require('./components/securitySettings/newLoginBtnCallback').newLoginBtnCallback,
  newPasswordBtnCallback: require('./components/securitySettings/newPasswordBtnCallback').newPasswordBtnCallback,
  deleteProfileBtnCallback: require('./components/securitySettings/deleteProfileBtnCallback').deleteProfileBtnCallback,
  securityInputCallback: require('./components/securitySettings/securityInputCallback').securityInputCallback,
  profileSecuritySubmitCallback: require('./components/securitySettings/profileSecuritySubmitCallback').profileSecuritySubmitCallback,

  searchSubmitBtnCallback: require('./components/search/searchSubmitBtnCallback').searchSubmitBtnCallback,

  salonsBtnCallback: require('./pages/mainPage/salonsBtnCallback').salonsBtnCallback,
  catalogTabsCallback: require('./pages/mainPage/catalogTabsCallback').catalogTabsCallback,
  catalogBtnCallback: require('./pages/mainPage/catalogBtnCallback').catalogBtnCallback,
  blogBtnCallback: require('./pages/mainPage/blogBtnCallback').blogBtnCallback,
  catalogLinkClickCallback: require('./pages/mainPage/catalogLinkClickCallback').catalogLinkClickCallback,

  filterPriceInputCallback: require('./pages/catalogPage/filterPriceInputCallback').filterPriceInputCallback,
  filterButtonCallback: require('./pages/catalogPage/filterButtonCallback').filterButtonCallback,
  filterShowBtnCallback: require('./pages/catalogPage/filterShowBtnCallback').filterShowBtnCallback,
  filterClearBtnCallback: require('./pages/catalogPage/filterClearBtnCallback').filterClearBtnCallback,
  showMoreProductsBtnCallback: require('./pages/catalogPage/showMoreProductsBtnCallback').showMoreProductsBtnCallback,

  favoriteBtnClickCallback: require('./pages/productPage/favoriteBtnClickCallback').favoriteBtnClickCallback,
  basketBtnClickCallback: require('./pages/productPage/basketBtnClickCallback').basketBtnClickCallback,
}
