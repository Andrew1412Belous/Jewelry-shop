export function filterPriceInputCallback (event) {
  Object.assign(event.target, {
    style: `
        border: 2px solid #d6d6d6;
        color: #979797;
      `,
  })
}
