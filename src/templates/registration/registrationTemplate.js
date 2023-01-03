export const registrationTemplate = `
        <div data-close id="close-btn">&times;</div>
        <h5>Реєстрація</h5>
        <p id="message"></p>
        <input type="text" id="login" placeholder="Придумайте логін">
        <input type="text" id="password" placeholder="Придумайте пароль" disabled>
        <p id="password-message">Мінімум 8 літер (A-Z, a-z, 0-9)</p>
        <input type="text" id="verify-password" placeholder="Повторіть пароль" disabled>
        <input type="file" id="avatar">
        <img id="picture" src="https://www.library.ucla.edu/sites/default/files/styles/staff_profile_photo/public/stafficon.png?itok=ek60ZBBk&c=bc17c1d6f6f0889994adf4bccd05e6c2">
        <button id="submit">Зареєструватися</button>
`
