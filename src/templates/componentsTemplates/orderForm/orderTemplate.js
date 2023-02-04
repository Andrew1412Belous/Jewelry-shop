export const orderTemplate = `
  <div id="shadow"></div>
  <section id="order-section">
    <div data-back id="back-btn">&#9668;</div>
    <div data-close id="close-btn">&times;</div>
    <div class="order-wrapper">
      <div class="order-personal-data">
          <div class="order-contacts-data">
              <div class="order-check">&#10004; Контактні дані</div>
               <div class="inputs-wrapper">
                 <div class="input-block">
                      <div class="input-text">Телефон</div>
                      <input type="tel" class="order-input" id="input-tel" placeholder="+380" required/>
                  </div>
                  <div class="input-block">
                      <div class="input-text">Ім'я</div>
                      <input type="text" class="order-input" id="input-name"  required/>
                  </div>
                  <div class="input-block">
                      <div class="input-text">Прізвище</div>
                      <input type="text" class="order-input" id="input-surname" required/>
                  </div>
                  <div class="input-block">
                      <div class="input-text">По батькові</div>
                      <input type="text" class="order-input" id="input-patronymic" required/>
                  </div>
              </div>
          </div>
          <div class="order-delivery">
              <div class="order-check">&#10004; Доставка</div>
              <div class="order-text">Доставимо прямо до квартири</div>
              <div class="inputs-wrapper">
                  <div class="input-block">
                      <div class="input-text">Місто</div>
                      <input type="text" class="order-input" id="input-city" required>
                  </div>
                  <div class="input-block">
                      <div class="input-text">Адреса</div>
                      <input type="text" class="order-input" id="input-address" required>
                  </div>
              </div>
          </div>
          <div class="order-payment">
              <div class="order-check">&#10004; Оплата</div>
                <div class="order-check-wrapper">
                <div class="order-payment-check">
                  <input id="credit" name="radio" type="radio" class="form-check-input" checked required>
                  <label class="form-check-label" for="credit">Кредитна карта</label>
                </div>
                <div class="order-payment-check">
                  <input id="debit" name="radio" type="radio" class="form-check-input" required>
                  <label class="form-check-label" for="debit">Дебітова карта</label>
                </div>
                <div class="order-payment-check">
                  <input id="live" name="radio" type="radio" class="form-check-input" required>
                  <label class="form-check-label" for="live">При отриманні</label>
                </div>
                
                <div class="payment-form" id="payment-form">
                  <div class="inputs-wrapper">
                         <div class="input-block">
                          <div class="input-text">Іи'я на карті</div>
                          <input type="text" class="order-input" id="input-card-name" placeholder="ПІБ власния" required>
                      </div>
                      <div class="input-block">
                          <div class="input-text">Номер карти</div>
                          <input type="text" class="order-input" id="input-card-number" required>
                      </div>
                       <div class="input-block">
                          <div class="input-text">Доступна до:</div>
                          <input type="date" class="order-input" id="input-card-date" required>
                      </div>
                      <div class="input-block">
                          <div class="input-text">CVV</div>
                          <input type="text" class="order-input" id="input-card-cvv" required>
                      </div>
                  </div>
                </div>
              </div>  
          </div>
      </div> 
      <div class="order-products-wrapper">
          <div class="order-check">Ваше замовлення</div>
          <div class="order-products-basket">
          </div>
          <div class="order-details">
              <div class="order-total"></div>
              <button class="buy-products" id="order-buy-btn">Оформити замовлення</button>
          </div>
      </div>
    </div>
  </section>
  
`
