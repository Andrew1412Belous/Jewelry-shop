export function setProfileSecurityBlockParams (message, buttonText, inputValue = '') {
  this.elems['security-text'].innerText = message
  Object.assign(this.elems['input-security'], {
    value: inputValue,
    style: `
      color: #fff;
    `,
  })

  Object.assign(this.elems['profile-security-submit-btn'], {
    textContent: buttonText,
    disabled: true,
    style: `
      border: 1px solid #FFFFFF;
    `,
  })
}
