'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  toggleTodo,
  delTodo
} from 'reducers/todo/action-creators'
import { todosFilter } from 'utils/visibilityFilter'
import { sorterFilter } from 'utils/sorterFilter'

const Container = styled.div`
  border-bottom: 1px solid #cdf6f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
  &:first-child {
    border-top: 1px solid #cdf6f7;
  }
  &:hover {
    background: #ebf8f9;
  }
`

const CheckContainer = styled.div`
  flex: 1;
  text-align: center;
  font-size: 2em;
`

const TextContainer = styled.div`
  color: #000;
  text-decoration: none;
  flex: 10;
  text-align: left;
  padding: 0.25em 0.75em 0.25em 1em;
  border-left: 1px solid #cdf6f7;
`

const Text = styled.span`
  font-size: 2em;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  color: ${props => props.completed ? '#CCC' : '#000'};
`

const BtnContainer = styled.div`
  flex: 4;
  text-align: right;
`

const BtnDelete = styled.button`
  background: #f32929;
  border: none;
  color: #FFFFFF;
  font-weight: bold;
  border-radius: 4px;
`

const TodoList = ({ todos, filters, sorters, handleToggleTodo, handleDelTodo }) => {
  const filteredTodos = todosFilter(
    sorterFilter(todos, sorters),
    filters
  )

  return (
    <div>
      {filteredTodos.map((todo) => (
        <Container key={todo.id}>
          <CheckContainer onClick={handleToggleTodo(todo.id)}>
            {!!todo.completed && <span>✔</span>}
          </CheckContainer>
          <TextContainer onClick={handleToggleTodo(todo.id)}>
            <Text completed={todo.completed}>
              {todo.text}
            </Text>
          </TextContainer>
          <BtnContainer>
            <BtnDelete onClick={handleDelTodo(todo.id)}>
              X
            </BtnDelete>
          </BtnContainer>
        </Container>
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
