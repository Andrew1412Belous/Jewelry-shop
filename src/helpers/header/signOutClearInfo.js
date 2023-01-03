export function signOutClearInfo (object, storageName) {
  if (Array.isArray(object)) {
    object.splice(0, object.length)
  } else {
    for (const prop in object) {
      delete object[prop]
    }
  }

  sessionStorage.removeItem(storageName)
}
