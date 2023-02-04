export const messageStyle = `
  .shadow {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.6);
  }
  
 .window {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 360px;
    border: solid #ddd 1px;
    box-shadow: 4px 4px 8px #0005;
    border-radius: 16px;
    background: #333;
    padding: 16px;
    z-index: 103;
  }
    
  #close-btn {
      font-family: 'Open Sans', sans-serif;
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
   
   #message-title {
      text-align: center;
      font-family: 'Open Sans', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 40px;
      text-transform: uppercase;
      color: #fff;
      margin: 0;
   }
 
  #message-text {
    font-size: 30px;
    font-weight: 300;
    text-transform: none;
    text-align: center;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
   }
`
