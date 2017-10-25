'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  addTodo
} from 'reducers/todo/action-creators'

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
`
const StyledForm = styled.form`
  width: 100%;
`
const Text = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 42px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #D6D9DC;
  padding: 8px;
  border-radius: 4px;
`

const Form = ({ handleAddTodo }) => (
  <Container>
    <StyledForm onSubmit={handleAddTodo}>
      <Text
        type='text'
        placeholder='Digite sua tarefa. Ex.: Comprar pão'
        name='todo'
      />
    </StyledForm>
  </Container>
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
