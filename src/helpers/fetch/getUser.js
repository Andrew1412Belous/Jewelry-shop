export async function getUser (id) {
  return (await (await fetch(`${require('../../configs/hosts/host').host}/users?login=${id}`)).json())
}
