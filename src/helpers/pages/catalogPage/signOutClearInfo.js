export function signOutClearInfo (object) {
  if (Array.isArray(object)) {
    object.splice(0, object.length)
  } else {
    for (const prop in object) {
      delete object[prop]
    }
  }
}
