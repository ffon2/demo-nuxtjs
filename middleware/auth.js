/**
 * Authentication NuxtJS Middleware
 *
 * Use for login/logout user to website
 *
 *
 */
export default async function ({ app, store, route, redirect }) {
  const LOGIN_PAGE = '/login'
  console.log(process)
  if (process.server) {
    // หา loggedInUser จาก server เพื่อ initial ค่าใน store
    const loggedInUser = await app.$auth.getLoggedInUser()

    if (loggedInUser) {
      // ok
    }
    else {
      redirect(LOGIN_PAGE)
    }
  }

  if (process.client) {
    if (store.state.auth.loggedIn) {
      // ok
    }
    else {
      const loggedInUser = await app.$auth.getLoggedInUser()

      if (loggedInUser) {
        // ok
      }
      else {
        // not logged in
        redirect(LOGIN_PAGE)
      }
    }
  }
}
