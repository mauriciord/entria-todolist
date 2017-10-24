'use strict'

import React from 'react'
import { connect } from 'react-redux'
import {
  addTodo,
  toggleTodo
} from 'reducers/todo/action-creators'
import Todo from 'components/todo/Todo'

const App = ({ todos, handleAddTodo, handleToggleTodo, handleDelTodo }) => (
  <div>
    <form onSubmit={handleAddTodo}>
      <input
        type='text'
        placeholder='Digite sua tarefa. Ex.: Comprar pão'
        name='todo'
      />
    </form>
    {console.log(todos)}
    <div>Sort Filter</div>
    {todos.map((todo) => (
      <Todo btnDelClick={handleDelTodo} onClick={handleToggleTodo(todo.id)} todo={todo} />
    ))}
    <div>Done/Undone Filter</div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTodo: (e) => {
      e.preventDefault()
      dispatch(addTodo(e.target.todo.value))
      e.target.todo.value = ''
    },
    handleToggleTodo: (todoId) => (e) => {
      e.preventDefault()
      dispatch(toggleTodo(todoId))
    },
    handleDelTodo: (todoId) => (e) => {
      e.preventDefault()
      dispatch(toggleTodo(todoId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
