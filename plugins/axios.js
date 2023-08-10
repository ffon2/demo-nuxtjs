/**
 * Extending Axios Plugin
 *
 * see: https://axios.nuxtjs.org/extend.html
 *
 *
 */
import Vue from 'vue'

export default function ({ $axios, store, redirect, app }) {
  const loginPage = '/login'

  $axios.onRequest(config => {
    config.headers.Authorization = 'Bearer'
    config.headers['x-current-locale'] = 'th'
    config.headers['x-auth-user'] = 'Admin'
    if (store.state.auth.commitId) {
      config.headers['x-commit-id'] = `${store.state.auth.commitId}`
    }

    if (process.client) {
      store.dispatch('layout/beginHttpReq')
      config.headers['x-current-locale'] = `${store.state.i18n.locale}`
    }
  })

  $axios.onResponse(response => {
    if (process.client) {
      store.dispatch('layout/endHttpReq')
    }
  })

  $axios.onError(error => {
    if (process.client) {
      store.dispatch('layout/endHttpReq')
    }

    let status = parseInt(error.response && error.response.status)
    let errorCode
    let errorMsg

    if (!status) {
      // client request fail
      status = 499
    }


    if (status === 599) {
      // application error
      errorCode = error.response.data.errCode
      errorMsg = error.response.data.message

      if (error.response.data.traceId) {
        errorMsg = errorMsg + '\n[' + error.response.data.traceId + ']'
      }
    }
    else {
      // other error
      if (error.response && error.response.data && error.response.data.errCode) {
        errorCode = error.response.data.errCode
      }
      else {
        errorCode = `ERROR_STATUS_${status}`
      }

      if (error.response && error.response.data && error.response.data.message) {
        errorMsg = error.response.data.message
      }
      else {
        errorMsg = error.message
      }
    }

    // show error message
    if (process.client) {
      const vm = new Vue()

      if (status === 401) {
        // session expire
        if (app.$auth.isLoggedIn()) {
          app.$auth.logout()

          vm.$bvModal.msgBoxOk('Session Expired !', {
            modalClass: 'modal-ok',
            okTitle: 'OK'
          }).then(ok => {
            redirect(loginPage)
          })
        }
        else {
          redirect(loginPage)
        }
      } else {
        // request error
        if (errorCode != 'REFRESH_TOKEN_EXPIRED' && errorMsg != 'REFRESH_TOKEN_EXPIRED') {
          vm.$bvToast.toast(errorMsg, {
            title: errorCode,
            variant: 'danger',
            autoHideDelay: 8000
          })
        }
      }
    }

    // logging to console
    if (error.response && error.response.config) {
      console.warn(`*** FAIL RESPONSE "${error.response.config.url}" ***`, { errorCode, errorMsg })
    }
    else {
      console.warn('*** FAIL REQUEST ***', { errorCode, errorMsg })
    }

    // always return object
    return {
      status,
      data: 'false'
    }
  })
}