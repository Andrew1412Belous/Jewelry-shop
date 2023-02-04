export const registrationStyle = `
  ${require('../componentsElemsStyle/shadow').shadow}

  button#submit {
    margin: 16px auto 8px auto;
    ${require('../../buttonsStyle/button').button}
  }
  
  button#submit:hover {
    ${require('../../buttonsStyle/buttonHover').buttonHover}
  }

  #registration-form {
    ${require('../componentsElemsStyle/section').section}
    margin: 0 auto;
    width: 320px;
  }
      
  input#login, input#password, input#verify-password, input#set-phone {
    ${require('../../inputsStyle/authRegInputs').authRegInputs}
    margin: 0 auto;
    margin-top: 12px;
  }
    
   input#set-phone {
      display: none;
    }

    input[type="file"] {
      font-family: 'Open Sans', sans-serif;
      font-size: 11px;
      background: #333;
      display: block;
      margin: 8px auto 0 auto; 
      color: #fff;
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

    #password-message {
      color: #fff;
      margin: 0 auto;
      font-family: 'Open Sans', sans-serif;
      font-size: 11px;
      text-align: center;
    }

    #message {
      text-align: center;
      font-family: 'Open Sans', sans-serif;
      margin: 16px 0 16px 0;
      color: #fff;
    }
    
  #close-btn {
    ${require('../../buttonsStyle/closeBtn').closeBtn}
    top: -5px;
    right: 13px;
  }
    
 #reg-link, #avatar-text {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    display: block;
    margin: 15px auto 0 auto;
    color: #ddd;
    text-align: center;
  }
  
  #set-avatar {
    display: none;
  }
 `
