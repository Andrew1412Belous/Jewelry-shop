export async function putUser (id, user) {
  return await (await fetch(`${require('../../configs/hosts/host').host}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })).json()
}
