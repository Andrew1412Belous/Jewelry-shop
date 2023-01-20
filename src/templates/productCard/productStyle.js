export const productStyle = `
  .product-text-wrapper {
    margin: 0;
    border: 2px solid #d6d6d6;
    padding-bottom: 10px;
    border-radius: 4px;
  }
  
  .product-card {
    display :block;
    position: relative;
    width: 280px;
    margin-bottom: 70px;
    margin-right: 33px;
    margin-left: 33px;
    box-sizing: border-box;
  }
  
  .product-card:hover .product-favorite {
    display: block;
  }
  
  .product-favorite {
    display: none;
    position: absolute;
    z-index: 1;
    right: 6px;
    top: 5px;
  }
  
  .product-favorite-icon {
    width: 20px;
    height: 20px;
  }
  
  .product-favorite-icon:hover {
    width: 24px;
    height: 24px;
  }
  
  .product-icon {
    display: block;
    margin: 0;
    height: 220px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  
  .product-type {
    margin-top: 25px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #333;
  }
  
  .product-brand-name {
    margin-top: 10px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    text-align: center;
    color: #333;
  }
  
  .product-btn {
    width: 150px;
    height: 41px;
    background: #333;
    border: 1px solid #fff;
    border-radius: 2px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #fff;
    display: flex;
    margin: 15px auto 0 auto;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .product-btn:hover {
    background: #fff;
    color: #343a40;
    border: 1px solid #212529;
    box-shadow: 3px 3px 10px #e9ecef;
  }
  
  .product-hr {
    border: 2px solid #d6d6d6;
    margin-bottom: 95px;
  }
  
  .product-hide {
    display: none;
  }
  
  .product-show {
    display: block;
  }
`
