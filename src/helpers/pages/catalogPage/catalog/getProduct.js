export function getProduct (container) {
  return {
    type: container.querySelector('.product-type').textContent,
    brand: container.querySelector('.product-brand-name').textContent,
    picture: container.querySelector('.product-icon').src,
    price: Number(this.dataset.price),
  }
}
