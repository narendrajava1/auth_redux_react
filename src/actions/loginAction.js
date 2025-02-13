import { loginSuccess } from './authActions'

export const login = (credentials) => (dispatch) => {
  //Mock API call

  return new Promise((resolve) => {
    setTimeout(() => {
      dispatch(
        loginSuccess({
          token: 'fake-jwt-token',
          user: { email: credentials.email },
        })
      )
      resolve()
    }, 1000)
  })
}
