const {
  orderTemplate,
  orderStyle,
} = require('../../templates/index')

const addElem = require('../../helpers/DOM/addElem').addElem

const {
  hideUpdatingComp,
  orderBackBtnCallback,
  telInputCallback,
  setCyrillicInputParamsCallback,
  addressInputCallback,
  cardCheckClickCallback,
  cardNumberInputCallback,
  cardNameInputCallback,
  cardDateInputCallback,
  cardCvvInputCallback,
  buyAllProductsBtnCallback,
} = require('../../callbacks/index')

export class OrderForm extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'closed' })
    this.section = Object.assign(addElem('section', this.shadow), {
      id: 'order-section-wrapper',
      innerHTML: orderTemplate,
    })
    Object.assign(addElem('style', this.shadow), {
      textContent: orderStyle,
    })
    this.getElemById = require('../../helpers/components/getElemsByIdFromShadow').getElemsByIdFromShadow
  }

  connectedCallback () {
    this.section.style.display = 'none'

    this.addEventListener('open-order-form', () => {
      this.section.style.display = 'block'

      require('../../helpers/components/orderForm/insertOrderProducts').insertOrderProducts(this.section)

      this.elems = this.getElemById(require('../../configs/components/orderForm/orderFormElemNames')
        .orderFormElemNames)

      require('../../helpers/components/orderForm/setFormParams').setFormParams(this.elems)

      this.elems.shadow.onclick = hideUpdatingComp.bind(this, orderTemplate)

      this.elems['close-btn'].onclick = hideUpdatingComp.bind(this, orderTemplate)

      this.elems['back-btn'].onclick = orderBackBtnCallback.bind(this)

      this.elems['input-tel'].oninput = telInputCallback.bind(this)
      this.elems['input-name'].oninput = setCyrillicInputParamsCallback.bind(this)
      this.elems['input-surname'].oninput = setCyrillicInputParamsCallback.bind(this)
      this.elems['input-patronymic'].oninput = setCyrillicInputParamsCallback.bind(this)
      this.elems['input-city'].oninput = setCyrillicInputParamsCallback.bind(this)
      this.elems['input-address'].oninput = addressInputCallback.bind(this)

      this.elems.credit.onclick = cardCheckClickCallback.bind(this)
      this.elems.debit.onclick = cardCheckClickCallback.bind(this)
      this.elems.live.onclick = cardCheckClickCallback.bind(this)

      this.elems['input-card-number'].oninput = cardNumberInputCallback.bind(this)
      this.elems['input-card-name'].oninput = cardNameInputCallback.bind(this)
      this.elems['input-card-date'].oninput = cardDateInputCallback.bind(this)
      this.elems['input-card-cvv'].oninput = cardCvvInputCallback.bind(this)

      this.elems['order-buy-btn'].onclick = buyAllProductsBtnCallback.bind(this)
    })
  }
}

customElements.define('order-form', OrderForm)
