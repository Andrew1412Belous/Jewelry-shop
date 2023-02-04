export async function deleteUser (id) {
  await fetch(`${require('../../configs/hosts/host').host}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
