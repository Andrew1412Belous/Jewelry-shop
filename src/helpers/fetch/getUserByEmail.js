import { host } from '../../configs'

export async function getUserByEmail (id) {
  return (await (await fetch(`${host}/users?email=${id}`)).json())
}
