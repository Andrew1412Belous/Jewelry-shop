export const favoriteStyle = `
  ${require('../componentsElemsStyle/scroll').scroll}
  ${require('../componentsElemsStyle/shadow').shadow}

  #favorite-section {
    height: 600px;
    width: 950px;
    overflow: auto;
    ${require('../componentsElemsStyle/section').section}
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
  
  #close-btn {
    ${require('../../buttonsStyle/closeBtn').closeBtn}
    top: -5px;
    right: 13px;
  }
  
  .favorite-products-wrapper {
    margin: 20px auto 0 auto;
    display: flex;
    flex-direction: column;
  }
  
  .favorite-product-item {
    display: flex;
    margin-bottom: 50px;
  }
  
  .favorite-product-info {
    display: flex;
    margin-right: 100px;
    width: 600px;
  }
  
  .favorite-product-btns-wrapper {
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
  
  .product-brand-name, .favorite-product-price {
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
  
  .favorite-product-price {
    text-decoration: underline;
    font-weight: 500;
    color: #979797;
    font-size: 22px;
  }
  
  .favorite-product-btn {
    ${require('../../buttonsStyle/button').button}
    margin-bottom: 15px;
    width: 220px;
  }
  
  .favorite-product-btn:hover {
    ${require('../../buttonsStyle/buttonHover').buttonHover}
  }
  
  .favorite-empty {
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
