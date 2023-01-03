export function getProduct (product) {
  return {
    type: product.getElementsByClassName('product-type')[0].textContent,
    brand: product.getElementsByClassName('product-brand-name')[0].textContent,
    picture: product.getElementsByClassName('product-icon')[0].src,
    price: Number(product.dataset.price),
  }
}
