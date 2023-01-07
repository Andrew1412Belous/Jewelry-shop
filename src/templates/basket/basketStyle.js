export const basketStyle = `
  #basket-section {
    height: 600px;
    width: 950px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    overflow: auto;
    border: solid #ddd 2px;
    border-radius: 16px;
    background: #333;
    padding: 16px;
  }
  
   #close-btn {
    position: absolute;
    top: -5px;
    right: 13px;
    font-size: 30px;
    color: #fff;
    opacity: .5;
    font-weight: 700;
    border: none;
    background-color: transparent;
    cursor: pointer;
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
    font-family: 'Open Sans', sans-serif;
    background: #444;
    border: 1px solid #FFFFFF;
    display: block;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    margin-bottom: 15px;
    width: 220px;
  }
  
  .basket-product-btn:hover {
    background: #fff;
    color: #343a40;
    border: 1px solid #212529;
    box-shadow: 3px 3px 8px #e9ecef;
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
