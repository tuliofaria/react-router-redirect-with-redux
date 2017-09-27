import { combineReducers } from 'redux'

const INITIAL_STATE = {
  forceLogin: false
}

const reducerLogin = (state=INITIAL_STATE, action) => {
  return { ...state, forceLogin: action.value }
}

export const actionForceLogin = { 
  type: 'FORCE_LOGIN', 
  value: true
}

const rootReducer = combineReducers({
  login: reducerLogin
})

export default rootReducer