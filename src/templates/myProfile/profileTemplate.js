export const profileTemplate = `
    <div data-close id="close-btn">&times;</div>
    <div id="profile-main-page">
      <div id="profile-info">
          <p id="login"></p>
          <img src="" alt="avatar" id="avatar">
      </div>
      <div id="profile-buttons">
          <a href="#" class="profile-link" id="profile-purchase-history">Історія замовлень</a>
          <a href="#" class="profile-link" id="profile-favorite">Бажане</a>
          <a href="#" class="profile-link" id="profile-settings">Налаштування</a>
          <a href="#" class="profile-link" id="profile-sign-out">Вихід</a>
      </div> 
    </div>
    <div id="profile-general-settings">
        <div data-back id="back-btn">&#9668;</div>
        <h2>Налаштування профілю</h2>
        <div id="buttons-wrapper">
            <button class="profile-btn" id="personal-data-btn">Персональні дані</button>
            <button class="profile-btn" id="security-settings-btn">Конфіденційні дані</button>
        </div>
        <div id="personal-data">
            <div class="profile-title">Персональні дані</div>
            <div class="profile-subtitle">Вкажіть ваші персональні дані (тільки кирилиця), щоб при оформленні замовлення не заповнювати вручну.</div>
            <p id="message"></p>
            <div class="inputs-wrapper">
               <div class="input-block">
                    <div class="input-text">Ім'я</div>
                    <input type="text" class="profile-input" id="input-name" required>
                </div>
                <div class="input-block">
                    <div class="input-text">Прізвище</div>
                    <input type="text" class="profile-input" id="input-surname" required>
                </div>
                <div class="input-block">
                    <div class="input-text">По батькові</div>
                    <input type="text" class="profile-input" id="input-patronymic" required>
                </div>
            </div>
            <div class="profile-title">Аватарка</div>
            <div class="profile-subtitle">Замініть системні зображення на свої. Рекомендований розмір зображення до 300Kb</div>
            <div class="change-avatar">
                <img src="" alt="" id="picture">
                <input type="file" id="input-file">
            </div>
            <button class="profile-btn" id="profile-submit-btn">Зберегти профіль</button> 
        </div>
        <div id="security-settings">
            <div class="profile-title">Конфідеційні дані</div>
            <div class="profile-subtitle">В якості логіна ви можете використовувати email. Пароль буде однаковим</div>
            <div id="buttons-wrapper-sec">
                <button class="profile-btn" id="new-email-btn">Змінити/встановити email</button>
                <button class="profile-btn" id="new-login-btn">Змінити логін</button>
                <button class="profile-btn" id="new-password-btn">Змінити пароль</button>
                <button class="profile-btn" id="delete-profile-btn">Видалити аккаунт</button>
            </div>
            <p id="security-message"></p>
            <div class="inputs-wrapper-sec">
              <div class="input-block" id="security-block">
                  <div class="input-text" id="security-text"></div>
                  <input type="email" class="profile-input" id="input-security" required>
                  <button class="profile-btn" id="profile-security-submit-btn" disabled>Підтвердити</button>
              </div>
            </div>
        </div>
    </div>
  
`
