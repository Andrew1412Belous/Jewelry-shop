export const orderHistoryStyle = `
  #order-history-section {
    height: 600px;
    width: 660px;
    ${require('../componentsElemsStyle/section').section}
  }

  #close-btn {
    ${require('../../buttonsStyle/closeBtn').closeBtn}
    top: -5px;
    right: 13px;
  }
  
  #back-btn {
    position: absolute;
    top: 0px;
    left: 10px;
    font-size: 20px;
    color: #fff;
    opacity: .7;
    font-weight: 700;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  
  .order-number {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    color: #fff;
    text-align: left;
  }
  
  .order-info {
    margin-top: 10px;
  }
  
  .order-details {
    width: 600px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #444;
    border: solid #ddd 2px;
    border-radius: 16px;
    padding: 16px;
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
    font-size: 20px;
  }
  
  .order-product {
    margin-bottom: 10px;
    border-bottom: solid #ddd 1px;
  }
  
  .order-total-price {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    text-transform: uppercase;
    color: #fff;
  }
  
  .order-empty {
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
