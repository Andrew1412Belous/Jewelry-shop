export const orderStyle = `
  #order-section {
    height: 660px;
    width: 1100px;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    overflow: auto;
    border: solid #ddd 2px;
    border-radius: 16px;
    background: #333;
    padding: 16px;
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
    font-family: 'Noto Serif', serif;
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
    font-family: 'Open Sans', sans-serif;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 4px;
    border: solid #fff 1px;
    background: #333;
    color: #fff;
    display: block;
    outline-color: #aaa;
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
`
