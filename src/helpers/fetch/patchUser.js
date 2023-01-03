import { host } from '../../configs'

export async function patchUser (id, user) {
  return await (await fetch(`${host}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })).json()
}
