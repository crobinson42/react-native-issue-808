import { EMAIL_CHANGED, PASSWORD_CHANGED, LOG_USER_IN_SUCCESS } from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case LOG_USER_IN_SUCCESS:
      return { ...state, user: action.payload }
    default:
      return state
  }
}
