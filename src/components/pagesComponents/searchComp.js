const {
  addElem,
  getElemsByIdFromShadow,
} = require('../../helpers/index')

const {
  searchTemplate,
  searchStyle,
} = require('../../templates/index')

const {
  searchSubmitBtnCallback,
  hideComponentCallback,
} = require('../../callbacks/index')

export class SearchComp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'search-section',
      innerHTML: searchTemplate,
    })

    Object.assign(addElem('style', this.shadow), {
      textContent: searchStyle,
    })

    this.getElemsById = getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-search', () => {
      this.section.style.display = 'block'

      this.elems = this.getElemsById(require('../../configs/index').searchElemNames)

      this.elems['close-btn'].onclick = hideComponentCallback.bind(this, searchTemplate)

      this.elems['search-submit-btn'].onclick = searchSubmitBtnCallback.bind(this)
    })
  }
}

customElements.define('search-component', SearchComp)
