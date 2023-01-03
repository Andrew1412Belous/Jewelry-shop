import { host } from '../../configs'

export async function getUser (id) {
  return (await (await fetch(`${host}/users?login=${id}`)).json())
}
