import { host } from '../../configs'

export async function putUser (id, user) {
  return await (await fetch(`${host}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })).json()
}
