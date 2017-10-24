'use strict'

import { combineReducers } from 'redux'
import todos from './todo/index'
import filters from './filter/index'

export default combineReducers({
  todos,
  filters
})
