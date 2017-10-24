'use strict'

import React from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import {
  toggleTodo,
  delTodo
} from 'reducers/todo/action-creators'
import { todosFilter } from 'utils/visibilityFilter'
import { sorterFilter } from 'utils/sorterFilter'

const styles = {
  container: css({
    border: '5px solid #ccc',
    padding: 6,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }),
  textContainer: css({
    color: '#000',
    textDecoration: 'none',
    flex: 7,
    textAlign: 'left'
  }),
  todoCompleted: css({
    textDecoration: 'line-through'
  }),
  btnContainer: css({
    flex: 1,
    textAlign: 'right'
  }),
  btnDel: css({
    borderRadius: 6,
    border: '1px solid #e82222',
    backgroundColor: '#f32929',
    color: '#fff',
    fontWeight: 'bold'
  })
}

const TodoList = ({ todos, filters, sorters, handleToggleTodo, handleDelTodo }) => {
  const filteredTodos = todosFilter(
    sorterFilter(todos, sorters),
    filters
  )

  return (
    <div>
      {filteredTodos.map((todo) => (
        <div key={todo.id} {...styles.container}>
          <div {...styles.textContainer} onClick={handleToggleTodo(todo.id)}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </div>
          <div {...styles.btnContainer}>
            <button {...styles.btnDel} onClick={handleDelTodo(todo.id)}>
              X
          </button>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = ({ todos, filters, sorters }) => {
  return {
    todos,
    filters,
    sorters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleTodo: (todoId) => (e) => {
      e.preventDefault()
      dispatch(toggleTodo(todoId))
    },
    handleDelTodo: (todoId) => (e) => {
      e.preventDefault()
      dispatch(delTodo(todoId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
