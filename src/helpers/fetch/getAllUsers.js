import { allUsersEndpoint } from '../../configs'

export async function getAllUsers () {
  return await (await fetch(allUsersEndpoint)).json()
}
