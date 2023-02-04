const favoriteProducts = require('../../helpers/components/favorite/favoriteProducts')
const addElem = require('../../helpers/DOM/addElem').addElem

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
    this.getElemsById = require('../../helpers/components/getElemsByIdFromShadow').getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-favorite', () => {
      document.onkeydown = function (event) {
        if (event.code === 'Escape') hideUpdatingComp.bind(this, favoriteTemplate)()
      }.bind(this)

      this.section.style.display = 'block'

      require('../../helpers/components/favorite/insertFavoriteProducts')
        .insertFavoriteProducts.bind(this, this.section)()
      this.elems = this.getElemsById(require('../../configs/components/favorite/favoriteElemNames')
        .favoriteElemNames)

      this.elems['close-btn'].onclick = hideUpdatingComp.bind(this, favoriteTemplate)
      this.elems.shadow.onclick = hideUpdatingComp.bind(this, favoriteTemplate)

      this.elems['back-btn'].onclick = favoriteBackBtnCallback.bind(this, favoriteTemplate)

      this.elems['favorite-section'].querySelectorAll('#delete-favorite')
        .forEach(btn => {
          btn.onclick = favoriteDeleteProductCallback.bind(this)
        })

      this.elems['favorite-section'].querySelectorAll('#add-basket-btn')
        .forEach((btn, index) => {
          if (require('../../helpers/components/basket/checkBasketProducts').checkBasketProducts(favoriteProducts[index])) {
            btn.textContent = 'В кошику'
          }

          btn.onclick = favoriteAddToBasketCallback.bind(this)
        })
    })
  }
}

customElements.define('favorite-products', FavoriteComp)
