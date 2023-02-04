export const securitySettingsTemplate = `
  <div id="back-btn">&#9668;</div>
  <div id="close-btn">&times;</div>
  <h2>Налаштування профілю</h2>
  <div id="buttons-wrapper">
    <button class="profile-btn" id="personal-data-btn">Персональні дані</button>
    <button class="profile-btn" id="security-settings-btn">Конфіденційні дані</button>
  </div>
   <div id="security-settings">
      <div class="profile-title">Конфіденційні дані</div>
      <div id="buttons-wrapper-sec">
          <button class="profile-btn" id="new-email-btn">Змінити/встановити email</button>
          <button class="profile-btn" id="new-login-btn">Змінити логін</button>
          <button class="profile-btn" id="new-password-btn">Змінити пароль</button>
          <button class="profile-btn" id="delete-profile-btn">Видалити аккаунт</button>
      </div>
      <p id="security-message"></p>
      <div class="inputs-wrapper-sec">
        <div class="input-block" id="security-verify-block">
          <input type="text" class="profile-input" id="input-verify" placeholder="Введіть ваш пароль">
          <button class="profile-btn" id="verify-submit-btn">Підтвердити</button>
        </div>
        <div class="input-block" id="security-block">
            <div class="input-text" id="security-text"></div>
            <input type="text" class="profile-input" id="input-security" required>
            <button class="profile-btn" id="profile-security-submit-btn" disabled>Підтвердити</button>
        </div>
      </div>
  </div>
`
