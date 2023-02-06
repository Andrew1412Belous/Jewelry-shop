export const orderStyle = `
  ${require('../componentsElemsStyle/scroll').scroll}
  ${require('../componentsElemsStyle/shadow').shadow}

  #order-section {
    height: 660px;
    width: 1100px;
    overflow: auto;
    ${require('../componentsElemsStyle/section').section}
  }
    
  .order-wrapper {
    display: flex;
  }
  
  .order-personal-data {
    display: flex;
    flex-direction: column;
    width: 600px;
  }
  
  .order-contacts-data {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .order-check {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    color: #fff;
    text-align: left;
  }
  
  .inputs-wrapper {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: #444;
    border: solid #ddd 2px;
    border-radius: 16px;
    padding: 16px;
  }
  
  .order-input {
    width: 530px;
    ${require('../../inputsStyle/authRegInputs').authRegInputs}
  }
  
  .input-text {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
  }
  
  .order-payment-check {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #fff;
  }
  
  .order-check-wrapper {
    margin: 10px 0;
  }
  
  .order-text {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #979797;
  }
  
  .payment-form {
    display: none;
  }
  
  #input-card-cvv {
    width: 50px;
  }
  
  .order-products-wrapper {
    margin: 10px 16px 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .order-products-basket {
    background: #444;
    border: solid #ddd 2px;
    border-radius: 16px; 
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }
  
  .order-product {
    overflow: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: solid #ddd 1px;
  }
 
  .product-brand-name {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
  }
  
  .product-type {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #979797;
    display: flex;
  }
  
  .product-price {
    font-family: 'Open Sans', sans-serif;
    text-decoration: underline;
    font-weight: 500;
    color: #979797;
    font-size: 26px;
  }
  
  .buy-products {
    font-family: 'Open Sans', sans-serif;
    background: #444;
    border: 1px solid #FFFFFF;
    display: block;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 20px;
    width: 220px;
    height: 70px;
  }
  
  .buy-products:hover {
    background: #fff;
    color: #343a40;
    border: 1px solid #212529;
    box-shadow: 3px 3px 8px #e9ecef;
  }
  
  .order-details {
    margin-top: 5px;
    width: 100%;
  }
  
  .order-total {
    font-family: 'Open Sans', sans-serif;
    text-align: right;
    font-weight: 600;
    font-size: 22px;
    color: #fff;
  }
  
    #back-btn {
    position: absolute;
    top: -5px;
    left: 10px;
    font-size: 20px;
    color: #fff;
    opacity: .7;
    font-weight: 700;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  #close-btn {
    position: absolute;
    top: -12px;
    right: 13px;
    font-size: 30px;
    color: #fff;
    opacity: .5;
    font-weight: 700;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  .order-done {
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
