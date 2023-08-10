/**
 * Utility NuxtJS Plugin
 *
 * Common utility function
 *
 */
class Util {

  // https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/
  compareObject (obj1, obj2) {
    return Object.entries(obj1).toString() === Object.entries(obj2).toString()
  }

  cloneObject (obj) {
    return JSON.parse(JSON.stringify(obj))
  }
}

export default (context, inject) => {
  // console.log('inject $util ...')
  inject('util', new Util())
}