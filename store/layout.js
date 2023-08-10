// import debounce from 'lodash/debounce'
import localForage from 'localforage'

export const state = () => ({
  showSidebar: true,
  httpReqCnt: 0,
  sideBarMini: false,
  showLoading: false,
})

// const debounceShowLoading = debounce((state) => {
//   if (state.httpReqCnt > 0) {
//     state.showLoading = true
//   }
// }, 200)

export const mutations = {
  toggleSidebar (state) {
    state.showSidebar = !state.showSidebar
    state.sideBarMini = !state.sideBarMini
    localForage.setItem('sidebarMini', !state.sideBarMini)
  },
  setShowSidebar (state, value) {
    state.showSidebar = value
  },
  mouseOver (state, value) {
    if (!state.showSidebar) {
      state.sideBarMini = value
    }
  },
  mouseLeave (state, value) {
    if (!state.showSidebar) {
      state.sideBarMini = value
    }
  },
  increaseHttpReq (state) {
    state.httpReqCnt++
    state.showLoading = true
    // debounceShowLoading(state)
  },
  decreaseHttpReq (state) {
    state.httpReqCnt--
    if (state.httpReqCnt <= 0) {
      state.httpReqCnt = 0
      state.showLoading = false
    }
  },
}

export const actions = {
  toggleSidebar (context) {
    context.commit('toggleSidebar')
  },
  mouseOverSidebar (context) {
    context.commit('mouseOver', false)
  },
  mouseLeaveSidebar (context) {
    context.commit('mouseLeave', true)
  },
  showSidebar (context) {
    context.commit('setShowSidebar', true)
  },
  beginHttpReq (context) {
    context.commit('increaseHttpReq')
  },
  endHttpReq (context) {
    context.commit('decreaseHttpReq')
  },
}
