
export const state = () => ({
  // TODO: initial from localStorage ?
  loggedIn: false,
  user: {},
  accessToken: '',
  refreshToken: '',
  commitId: ''
})

export const getters = {
}

export const mutations = {
  login (state, { user }) {
    console.log('user log in')
    // save to vuex
    state.loggedIn = true
    state.user = user

    localStorage.setItem('loggedIn', state.loggedIn)

  },
  logout (state) {
    // remove from vuex
    state.loggedIn = false
    localStorage.removeItem('loggedIn')
  }
}
export const actions = {}