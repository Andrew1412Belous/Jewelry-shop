export async function getUserByEmail (id) {
  return await (await fetch(`${require('../../configs/hosts/host').host}/users?email=${id}`)).json()
}
