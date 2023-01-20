import { productsEndpoint } from '../../configs/hosts/productsEndpoint'

export async function getAllProducts () {
  return await (await fetch(productsEndpoint)).json()
}
