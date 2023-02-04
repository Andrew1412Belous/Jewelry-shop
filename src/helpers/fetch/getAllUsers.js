export async function getAllUsers () {
  return await (await fetch(require('../../configs/hosts/allUsersEndpoint').allUsersEndpoint)).json()
}
