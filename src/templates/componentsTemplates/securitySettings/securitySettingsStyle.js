export const securitySettingsStyle = `
  ${require('../componentsElemsStyle/shadow').shadow}

  #security-settings-wrapper {
    ${require('../componentsElemsStyle/section').section}
    width: 900px;
    overflow: none;
  }
  
  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 22px;
    color: #fff;
    text-align: left;
    margin-top: 10px;
  } 
  
  #buttons-wrapper {
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 380px;
    justify-content: space-between;
  }
  
  button.profile-btn {
    ${require('../../buttonsStyle/button').button}
  }
  
  button.profile-btn:hover {
    ${require('../../buttonsStyle/buttonHover').buttonHover}
  }
  
  .profile-title {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    color: #fff;
    text-align: left;
    margin-top: 30px;
  }
  
  .profile-subtitle {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #fff;
    text-align: left;
    margin-top: 0px;
    opacity: 0.6;
  }
  
  #message, #security-message {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    margin-top: 16px;
    color: #fff;
  }
  
  .inputs-wrapper {
    margin: 20px 40px 0 0;
    display: flex;
    justify-content: space-between;
  }
  
  .profile-input {
    ${require('../../inputsStyle/authRegInputs').authRegInputs}
  }
  
  .input-text {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
  }
  
  .change-avatar {
    margin: 10px auto 0 auto;
    display: flex;
    align-items: center;
  }
  
  #picture {
    width: 200px;
    display: block;
    margin-right: 20px;
  }
  
  #input-file {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    background: #444;
    display: block;
    color: #fff;
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
  
  #profile-submit-btn {
    display: block;
    margin: 10px auto 0 auto;
  }
  
  #buttons-wrapper-sec {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: space-between;
  }
  
  #security-settings {
    width: 900px;
  }
  
  .inputs-wrapper-sec {
    margin: 20px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  #security-block, #security-verify-block {
    display: none;
  }
  
  #profile-security-submit-btn, #verify-submit-btn {
    display: block;
    margin: 15px auto 0 auto;
  }
  
  .show {
    display: block;
  }
  
  .hide {
    display: none;
  }
  
 
  #message-phone {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 5px;
    color: #fff;
  }
`
