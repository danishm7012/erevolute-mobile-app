import { AUTHENTICATE, LOGOUT } from '../action/userAction'

const initialState = {
  token: null,
  userId: null,
}
export default (state = initialState, action) => {
  console.log('userId id :!!!', action.token)
  console.log('token is: !!', action.userId)

  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
      }
    case LOGOUT:
      return initialState
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId,
    //   }
    default:
      return state
  }
}
