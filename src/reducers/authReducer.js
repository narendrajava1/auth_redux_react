const intialState = {
  user: null,
  token: null,
  isAuthenticated: false,
}
export const authReducer = (state=intialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      }
    case 'LOG_OUT':
      return intialState

    default:
      return state
  }
}
