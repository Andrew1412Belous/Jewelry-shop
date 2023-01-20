export const registrationStyle = `
    #shadow {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.6);
    }

    #registration-form {
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
      z-index: 100;
    }
      
      input#login, input#password, input#verify-password, input#set-phone {
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

      button#submit {
        font-family: 'Open Sans', sans-serif;
        background: #333;
        border: 1px solid #FFFFFF;
        display: block;
        margin: 16px auto 8px auto;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
      }
      
      button#submit:hover {
        background: #fff;
        color: #343a40;
        border: 1px solid #212529;
        box-shadow: 3px 3px 8px #e9ecef;
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
