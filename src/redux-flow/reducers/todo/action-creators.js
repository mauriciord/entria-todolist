'use strict'
import { v4 } from 'uuid'
import * as actions from './actions'

export const addTodo = (text) => {
  return {
    type: actions.ADD_TODO,
    payload: { id: v4() , text }
  }
}

export const toggleTodo = (id) => {
  return {
    type: actions.TOGGLE_TODO,
    payload: { id }
  }
}

// export const delTarefa = (id) => {
//   return {
//     type: DEL_TAREFA,
//     payload: id
//   }
// };
