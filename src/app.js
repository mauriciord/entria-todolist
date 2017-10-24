'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { css } from 'glamor'
import {
  delTodo
} from 'reducers/todo/action-creators'
import Form from 'components/form'
import TodoList from 'components/todo-list'
import Filter from 'components/filter'

const styles = {
  container: css({
    maxWidth: '800px',
    margin: '0 auto',
    border: '4px solid #ccc',
    backgroundColor: '#eae6e6'
  })
}

const App = () => (
  <div {...styles.container}>
    <Form />
    <div>Sort Filter</div>
    <TodoList />
    <Filter />
  </div>
)

export default App
