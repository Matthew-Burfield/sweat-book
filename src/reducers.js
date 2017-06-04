import { combineReducers } from 'redux'

const CREATE_TODO = 'CREATE_TODO'

const todos = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        action.payload,
        ...state
      ]
    default:
      return state
  }
}

const users = (state = [], action) => {
  return state
}

export const reducer = combineReducers({
  todos, users
})
