export async function createUser (user) {
  return await (await fetch(`${require('../../configs/hosts/host').host}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })).json()
}
