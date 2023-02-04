export async function patchUser (id, props) {
  return await (await fetch(`${require('../../configs/hosts/host').host}/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(props),
  })).json()
}
