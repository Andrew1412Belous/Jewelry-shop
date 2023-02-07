export const basketStyle = `
  ${require('../componentsElemsStyle/scroll').scroll}

  #basket-section {
    height: 600px;
    width: 950px;
    overflow: auto;
    ${require('../componentsElemsStyle/section').section}
  }
  
  
  ${require('../componentsElemsStyle/shadow').shadow}
  
  
  #close-btn {
    top: -5px;
    right: 13px;
    ${require('../../buttonsStyle/closeBtn').closeBtn}
  }
    
  .basket-products-wrapper {
    margin: 20px auto 0 auto;
    display: flex;
    flex-direction: column;
  }
  
  .basket-product-item {
    display: flex;
    margin-bottom: 50px;
  }
  
  .basket-product-info {
    display: flex;
    margin-right: 100px;
    width: 600px;
  }
  
  .basket-product-btns-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .product-icon {
    display: block;
    width: 260px;
    border-radius: 16px;
    margin-right: 25px;
  }
  
  .product-type {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #979797;
    display: flex;
  }
  
  .product-brand-name, .basket-product-price {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 28px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 5px;
  }
  
  .basket-product-price {
    font-family: 'Open Sans', sans-serif;
    text-decoration: underline;
    font-weight: 500;
    color: #979797;
    font-size: 22px;
  }
  
  .basket-product-btn {
    ${require('../../buttonsStyle/button').button}
    margin-bottom: 15px;
    width: 220px;
  }
  
  .basket-product-btn:hover {
    ${require('../../buttonsStyle/buttonHover').buttonHover}
  }
  
  .basket-empty {
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
  
  .basket-empty span {
    font-size: 30px;
    font-weight: 300;
    text-transform: none;
  }
  
  #buy-all-products-btn {
    margin: 0 auto;
  }
  
  .basket-count-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
  }
  
  .basket-decr, .basket-incr {
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    width: 32px;
    height: 32px;
    background: #fff;
    border: 2px solid #343a40;
    cursor: pointer;
  }
  
  .basket-decr:hover, .basket-incr:hover {
    background: #ddd;
  }
  
  .basket-count {
    font-weight: 500;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    color: #fff;
  }
`
