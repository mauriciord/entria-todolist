'use strict'

import React from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import {
  addTodo
} from 'reducers/todo/action-creators'

const styles = {
  container: css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }),
  formContainer: css({
    width: '100%',
    borderBottom: '3px solid #d7d7d7'
  }),
  textInput: css({
    width: '100%',
    boxSizing: 'border-box',
    height: '42px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    padding: '4px'
  })
}

const Form = ({ handleAddTodo }) => (
  <div {...styles.container}>
    <form {...styles.formContainer} onSubmit={handleAddTodo}>
      <input
        type='text'
        {...styles.textInput}
        placeholder='Digite sua tarefa. Ex.: Comprar pão'
        name='todo'
      />
    </form>
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTodo: (e) => {
      e.preventDefault()
      dispatch(addTodo(e.target.todo.value))
      e.target.todo.value = ''
    }
  }
}

export default connect(null, mapDispatchToProps)(Form)
