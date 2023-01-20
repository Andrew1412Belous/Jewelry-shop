export const profileStyle = `
  #profile-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    overflow: auto;
    border: solid #ddd 2px;
    border-radius: 16px;
    background: #333;
    padding: 16px;
    display: flex;
  }
  
  #login {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin: 0 auto;
  }
  
  #avatar {
    width: 300px;
    display: block;
    margin: 8px auto 0 auto;
  }
  
  #profile-info {
    margin-right: 40px;
  }
  
  #profile-main-page {
    display: flex;
    justify-content: space-between;
  }
  
  #profile-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .profile-link {
    display: block;
    margin-bottom: 15px;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  
  .profile-link:hover {
    color: #ded049;
  }
  
  #profile-general-settings, #personal-data, #security-settings {
    display: none
  }
  
  #personal-data {
    height: 520px;
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
    font-family: 'Open Sans', sans-serif;
    background: #444;
    border: 1px solid #FFFFFF;
    display: block;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
  
  button.profile-btn:hover {
    background: #fff;
    color: #343a40;
    border: 1px solid #212529;
    box-shadow: 3px 3px 8px #e9ecef;
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
    font-family: 'Open Sans', sans-serif;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 4px;
    border: solid #fff 1px;
    background: #444;
    color: #fff;
    display: block;
    outline-color: #aaa;
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
  
  .change-phone-wrapper, #change-phone-form {
    width: 220px;
    display: flex;
    flex-direction: column;
  }
  
   #change-phone-form {
    display: none;
   }
  
  #input-phone, #reset-phone-btn, #input-pin, #input-new-phone, #save-phone-btn {
    display: block;
    margin: 10px 0 5px 0;
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
