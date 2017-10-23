'use strict'

import { combineReducers } from 'redux'
import TodosReducer from './todo/index'

export default combineReducers({
  todos: TodosReducer
})
