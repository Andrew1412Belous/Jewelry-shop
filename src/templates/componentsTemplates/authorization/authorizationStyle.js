export const authorizationStyle = `
  ${require('../componentsElemsStyle/shadow').shadow}
    
  button#submit {
    margin: 16px auto 8px auto;
    ${require('../../buttonsStyle/button').button}
  }
  
  button#submit:hover {
    ${require('../../buttonsStyle/buttonHover').buttonHover}
  }
    
  #authorization-form {
    ${require('../componentsElemsStyle/section').section}
    margin: 0 auto;
    width: 320px;
  }
  
  #close-btn {
    ${require('../../buttonsStyle/closeBtn').closeBtn}
    top: -5px;
    right: 13px;
  }

  input#login, input#password {
    ${require('../../inputsStyle/authRegInputs').authRegInputs}
    margin: 0 auto;
    margin-top: 12px;
  }
  
  

    #picture {
      width: 200px;
      display: block;
      margin: 8px auto 8px auto;
    }

    h5 {
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      color: #fff;
      text-align: center;
      margin: 16px 0;
    }

    #message {
      text-align: center;
      font-family: 'Open Sans', sans-serif;
      margin: 16px 0 16px 0;
      color: #fff;
      font-size: 16px;
    }

    #auth-link {
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      display: block;
      margin: 15px auto 0 auto;
      color: #ddd;
      text-align: center;
    }
`
