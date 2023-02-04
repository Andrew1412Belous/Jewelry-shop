export const registrationTemplate = `
    <div id="shadow"></div>
    <section id="registration-form">
      <div data-close id="close-btn">&times;</div>
      <h5>Реєстрація</h5>
      <p id="message"></p>
      <input type="text" id="login" placeholder="Придумайте логін">
      <input type="text" id="password" placeholder="Придумайте пароль" disabled>
      <p id="password-message">Мінімум 8 літер (A-Z, a-z, 0-9)</p>
      <input type="text" id="verify-password" placeholder="Повторіть пароль" disabled>
      <input type="text" id="set-phone" placeholder="+380">
      <div id="set-avatar">
        <div id="avatar-text">Не обов'язково</div>
        <input type="file" id="avatar">
        <img id="picture" src="${(require('../../../assets/defaultPicture').defaultPicture)}">
      </div>
      <button id="submit">Зареєструватися</button>
      <a href="#" id="reg-link">Я вже зареєстрований</a>
    </section>
`
