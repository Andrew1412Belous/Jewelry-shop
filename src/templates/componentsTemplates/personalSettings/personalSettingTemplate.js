export const personalSettingTemplate = `
  <div id="shadow"></div>
  <div id="personal-settings-wrapper">
    <div id="back-btn">&#9668;</div>
    <div id="close-btn">&times;</div>
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
      <div class="profile-title">Контактні дані</div>
      <div class="change-phone-wrapper">
          <input type="text" class="profile-input" id="input-phone" required disabled>
          <button class="profile-btn" id="reset-phone-btn">Змінити номер</button>
          <div class="change-phone" id="change-phone-form">
              <p id="message-phone"></p>
              <input type="text" class="profile-input" id="input-password" required placeholder="Введіть пароль">
              <input type="text" class="profile-input" id="input-new-phone" required placeholder="Введіть новий номер">
              <button class="profile-btn" id="save-phone-btn">Зберегти номер</button>
          </div>
      </div>
      <button class="profile-btn" id="profile-submit-btn">Зберегти профіль</button> 
    </div>
  </div>
`
