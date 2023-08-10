/**
 * Authentication NuxtJS Plugin
 *
 * Use for login/logout user to website
 *
 *
 */
export default ({ $axios, store, app, req }, inject) => {
  // // console.log('inject $auth ...')
  inject('auth', {
    getLoggedInUser () {
      let loggedInUser = false

      // process server only
      if (process.client) {

        loggedInUser = true

      }

      return loggedInUser
    },
  })
}