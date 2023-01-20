export function insertProductTemplate () {
  this.section.innerHTML = `
      <a href="#" class="product-favorite">
          <img src="${this.getAttribute('img')}" alt="favorite" class="product-favorite-icon">
      </a>
      <img src="./src/img/product-icon.jpg" alt="product" class="product-icon">
      <div class="product-text-wrapper">
          <div class="product-type">${this.getAttribute('type')}</div>
          <div class="product-brand-name">${this.getAttribute('brand')}</div>
          <button class="product-btn">${Number(this.getAttribute('price')).toLocaleString('ru-RU')} ₴</button>
      </div>
      <style>
        
      </style>
  `
}
