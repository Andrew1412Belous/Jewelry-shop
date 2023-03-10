export const headerTemplate = `
  <div class="header-employees-wrapper">
    <a class="header-agents" href="https://dou.ua/" target="_blank">Контрагентам</a>
    <a class="designers" href="https://www.figma.com/" target="_blank">Дизайнерам</a>
    <a class="vacations" href="https://www.linkedin.com/jobs/" target="_blank">Вакансії</a>
  </div>
  <div class="header-logo">
    <a class="header-link" id="header-logo">
        <img class="logo" src="${require('../../../assets/img/icons/logo.png')}" alt="logo">
    </a>
  </div>
  <div class="header-buttons">
    <div class="header-search">
      <a class="header-search-link" href="#" id="search-btn">
        <img class="header-search-logo" src="${require('../../../assets/img/icons/search.svg')}" alt="search">
        <div class="header-search-text">Пошук</div>
      </a>
    </div>
    <div class="header-profile">
      <div class="header-links">
        <a href="#" class="sign-in" id="sign-in">Вхід</a>
        <span class="header-links-span" id="header-span">/</span>
        <a href="#" class="sign-in" id="sign-up">Реєстрація</a>
        <a href="#" class="sign-out" id="sign-out">Вихід</a>
      </div>
      <div class="header-profile-icons">
        <a class="header-my-account" id="my-account" href="#">
          <img src="${require('../../../assets/img/icons/profile.svg')}" alt="my profile" class="header-profile-logo" id="header-profile-logo">
        </a>
        <a href="#" class="header-favorite" id="favorite-products">
          <img src="${require('../../../assets/img/icons/favorite.svg')}" alt="favorite" class="header-profile-logo">
        </a>
        <a href="#" class="header-basket" id="basket-products">
          <img src="${require('../../../assets/img/icons/basket.svg')}" alt="" class="header-profile-logo">
        </a>
      </div>
    </div>
  </div>
`
