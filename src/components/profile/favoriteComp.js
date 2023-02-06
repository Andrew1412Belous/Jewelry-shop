const {
  favoriteAddToBasketCallback,
  favoriteBackBtnCallback,
  favoriteDeleteProductCallback,
  hideUpdatingComp,
} = require('../../callbacks/index')

const {
  favoriteStyle,
  favoriteTemplate,
} = require('../../templates/index')

const {
  addElem,
  getElemsByIdFromShadow,
  favoriteProducts,
  insertFavoriteProducts,
  checkBasketProducts,
} = require('../../helpers/index')

export class FavoriteComp extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'favorite-form',
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: favoriteStyle,
    })

    this.section.innerHTML = favoriteTemplate
    this.getElemsById = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-favorite', () => {
      this.section.style.display = 'block'

      document.onkeydown = function (event) {
        if (event.code === 'Escape') hideUpdatingComp.bind(this, favoriteTemplate)()
      }.bind(this)

      insertFavoriteProducts.bind(this, this.section)()

      this.elems = this.getElemsById(require('../../configs/index').favoriteElemNames)

      this.elems['close-btn'].onclick = hideUpdatingComp.bind(this, favoriteTemplate)
      this.elems.shadow.onclick = hideUpdatingComp.bind(this, favoriteTemplate)

      this.elems['back-btn'].onclick = favoriteBackBtnCallback.bind(this, favoriteTemplate)

      this.elems['favorite-section'].querySelectorAll('#delete-favorite')
        .forEach(btn => {
          btn.onclick = favoriteDeleteProductCallback.bind(this)
        })

      this.elems['favorite-section'].querySelectorAll('#add-basket-btn')
        .forEach((btn, index) => {
          if (checkBasketProducts(favoriteProducts[index])) {
            btn.textContent = 'В кошику'
          }

          btn.onclick = favoriteAddToBasketCallback.bind(this)
        })
    })
  }
}

customElements.define('favorite-products', FavoriteComp)
