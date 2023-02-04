export const searchStyle = `
  #search-section {
    width: 240px;
    position: absolute;
    top: 70px;
    right: 250px;
    transform: translateX(-50%);
    border: solid #ddd 2px;
    border-radius: 16px;
    background: #333;
    padding: 16px;
  }
  
  #close-btn {
    ${require('../../buttonsStyle/closeBtn').closeBtn}
    top: -10px;
    right: 8px;
  }
  
  .inputs-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  #search-input {
    font-family: 'Open Sans', sans-serif;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 4px;
    border: solid #fff 1px;
    background: #444;
    color: #fff;
    display: block;
    margin: 10px auto 15px auto;
    outline-color: #aaa;
    
      font-family: 'Open Sans', sans-serif;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 4px;
    border: solid #fff 1px;
    background: #333;
    color: #fff;
    display: block;
    margin: 0 auto;
    margin-top: 12px;
    outline-color: #aaa;  
  }
  
  #search-message {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin: 0 auto;
    color: #fff;
  }
  
  #search-submit-btn {
    font-family: 'Open Sans', sans-serif;
    background: #444;
    border: 1px solid #FFFFFF;
    display: block;
    margin: 10px auto;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }  
  
  #search-submit-btn:hover {
    background: #fff;
    color: #343a40;
    border: 1px solid #212529;
    box-shadow: 3px 3px 8px #e9ecef;
  }
`
