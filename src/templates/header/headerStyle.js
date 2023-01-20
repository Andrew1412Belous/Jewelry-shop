export const headerStyle = `
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header-wrapper {
    background: #333333;
    padding: 45px 0;
  }
  
  .header-employees-wrapper {
    width: 321px;
    display: flex;
    justify-content: space-between;
  }
  
  .header-employees-wrapper a {
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #FFFFFF;
  }
  
  .header-employees-wrapper a:hover {
    color: #ded049;
  }
  
  .header-link {
    cursor: pointer;
  }
  
  .header-logo {
    position: absolute;
    left: 50%;
    top: 25px;
    transform: translateX(-50%);
  }
  
  .header-buttons {
    width: 348px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  .header-search {
    width: 78px;
    margin-right: 40px;
  }
  
  .header-search-link {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #fff;
  }
  
  .header-search-logo {
    display: block;
    width: 20px;
    height: 20px;
  }
  
  .header-search-link:hover {
   color: #ded049;
  }
  
  .header-profile {
    width: 230px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  .header-profile-icons {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  .header-profile-logo {
    display: block;
    width: 20px;
    height: 20px;
  }
  
  .header-links {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #fff;
  }
  
  .header-links a {
    color: #fff;
    text-decoration: none;
  }
  
  .header-links a:hover {
    color: #ded049;
  }
  
  .header-my-account, .header-favorite {
    display: block;
    margin-right: 10px;
  }
  
  .sign-out {
    display: none;
  }
`
