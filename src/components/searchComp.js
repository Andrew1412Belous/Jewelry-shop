import { addElem } from '../helpers'
import { searchTemplate } from '../templates/search/searchTemplate'
import { searchStyle } from '../templates/search/searchStyle'

class SearchComp extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'search-section',
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: searchStyle,
    })
    this.section.innerHTML = searchTemplate
  }

}

customElements.define('search-component', SearchComp)

export const searchComp = document.createElement('search-component')
