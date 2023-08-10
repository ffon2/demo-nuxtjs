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
    login (username, password) {
      console.log('auth login >> ', username, password)
      let user = {
        username
      }

      // call vuex
      store.commit('auth/login', { user })
      return true
    },
    getLoggedInUser () {
      let loggedInUser = false

      if (process.client) {
        console.log('loggedIn', store.state.auth.loggedIn)
        const loggedIn = localStorage.getItem('loggedIn')
        if (loggedIn) {
          loggedInUser = true

        }

      }
      console.log('loggedInUser', loggedInUser)
      return loggedInUser
    },
  })
}