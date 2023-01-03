export function checkUserIsReal (login, password) {
  return login && password === localStorage.getItem(login)
}
