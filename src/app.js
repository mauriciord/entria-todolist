'use strict'

import React from 'react'
import { css } from 'glamor'
import Form from 'components/form'
import TodoList from 'components/todo-list'
import Filter from 'components/filter'
import Sorter from 'components/sorter'

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
    <Sorter />
    <TodoList />
    <Filter />
  </div>
)

export default App
