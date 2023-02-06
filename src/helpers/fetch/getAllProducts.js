export async function getAllProducts () {
  return await (await fetch(require('../../configs/hosts/productsEndpoint').productsEndpoint)).json()
}
