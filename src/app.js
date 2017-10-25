'use strict'

import React from 'react'
import styled from 'styled-components'
import Form from 'components/form'
import TodoList from 'components/todo-list'
import Filter from 'components/filter'
import Sorter from 'components/sorter'
import './app.css'

const StyledApp = styled.div`
  max-width: 800px;
  background: #ffffff;
  margin: 30px auto;
  border-radius: 10px;
  padding-top: .8em;
  padding-bottom: .8em;
`

const App = () => (
  <StyledApp>
    <Form />
    <Sorter />
    <TodoList />
    <Filter />
  </StyledApp>
)

export default App
