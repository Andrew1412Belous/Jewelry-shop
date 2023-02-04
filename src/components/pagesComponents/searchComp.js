import { addElem } from '../../helpers'
import { checkSearchFilter } from '../../helpers/components/search/checkSearchFilter'
import { updateCatalogFilters } from '../../helpers/components/search/updateCatalogFilters'

const {
  searchTemplate,
  searchStyle,
} = require('../../templates/index')

export class SearchComp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'search-section',
      innerHTML: searchTemplate,
    })
    Object.assign(addElem('style', this.shadow) , {
      textContent: searchStyle,
    })

    this.getElemsById = require('../../helpers/components/getElemsByIdFromShadow').getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-search', () => {
      this.section.style.display = 'block'

      this.elems = this.getElemsById(require('../../configs/components/search/searchElemNames').searchElemNames)

      this.elems['search-submit-btn'].onclick = async function (event) {
        if (event.target.textContent === 'До товарів')updateCatalogFilters()
        else if (this.elems['search-input'].value) {
          sessionStorage.getItem('products')
            ? checkSearchFilter.bind(this)(JSON.parse(sessionStorage.getItem('products')))
            : await require('../../helpers/fetch/getAllProducts').getAllProducts()
              .then(response => {
                checkSearchFilter.bind(this)(response)

                sessionStorage.setItem('products', JSON.stringify(response))
              })
        } else {
          this.elems['search-message'].textContent = 'заповніть поле для пошуку'
        }
      }.bind(this)
    })
  }
}

customElements.define('search-component', SearchComp)

export const searchComp = document.createElement('search-component')
