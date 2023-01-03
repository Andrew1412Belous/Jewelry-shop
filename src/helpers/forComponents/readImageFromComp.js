export function readImageFromComp (event) {
  const file = event.target.files[0]
  const picture = this.elems.picture

  if (!file.type.indexOf('image')) {
    if (file.size > 307200) {
      Object.assign(this.elems.message, {
        innerText: 'Зображення завелике\nМаксимальний розмір 300Kb',
        style: `
          color: #ea3838;
        `,
      })
    } else {
      this.elems.message.innerText = ''

      const reader = new FileReader()
      reader.onload = function (ev) {
        picture.src = ev.target.result
      }

      reader.readAsDataURL(file)
    }
  } else {
    Object.assign(this.elems.message, {
      innerText: 'Недійснмй тип файлу',
      style: `
        color: #ea3838;
      `,
    })
  }
}
