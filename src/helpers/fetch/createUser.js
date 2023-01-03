import { host } from '../../configs'

export async function createUser (user) {
  return await (await fetch(`${host}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })).json()
}
