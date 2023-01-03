export function setInputMode (message) {
  return message.textContent.indexOf('пароль') !== -1
    ? 'password'
    : message.textContent.indexOf('email') !== -1
      ? 'email'
      : message.textContent.indexOf('логін') !== -1
        ? 'login'
        : 'delete'
}
