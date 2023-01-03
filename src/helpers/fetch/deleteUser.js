import { host } from '../../configs'

export async function deleteUser (id) {
  await fetch(`${host}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
