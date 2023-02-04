export const profileStyle = `
  ${require('../componentsElemsStyle/shadow').shadow}

  #profile-form {
    ${require('../componentsElemsStyle/section').section}
    width: 600px;
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
  
   #close-btn {
      ${require('../../buttonsStyle/closeBtn').closeBtn}
      top: -5px;
      right: 13px;
    }
`
