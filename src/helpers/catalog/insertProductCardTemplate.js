import { setPriceType } from '../components/setPriceType'

export function insertProductCardTemplate () {
  this.section.innerHTML = `
    <a href="#" class="product-favorite" id="product-favorite">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/1125px-Love_Heart_symbol.svg.png" alt="favorite" class="product-favorite-icon">
    </a>
    <img src="${this.product.picture}" alt="product" class="product-icon" id="product-image">
    <div class="product-text-wrapper">
      <div class="product-type" id="product-type">${this.product.type}</div>
      <div class="product-brand-name" id="product-brand">${this.product.brand}</div>
      <button class="product-btn product-price" id="product-price">${setPriceType(this.product.price)}</button>
    </div>
  `
}
