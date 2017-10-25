'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  sort
} from 'reducers/sorter/action-creators'
import {
  SHOW_RECENTS,
  SHOW_OLDER
} from 'reducers/sorter/actions'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ECF0F1;
  padding: 1em;
  margin: 1.2em 1.6em;
  border-radius: 6px;
`

const BtnFilter = styled.a`
  background: #127FAA;
  border: 1px solid #127FAA;
  color: #FFFFFF;
  padding: 0.25em 1em;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background: #287591;
    border: 1px solid  #127FAA;
    color: #e4e4e4;
  }
`

const Sorter = ({ handleSorter }) => (
  <Container>
    <BtnFilter onClick={handleSorter(SHOW_RECENTS)}>Show Most Recent</BtnFilter>
    <BtnFilter onClick={handleSorter(SHOW_OLDER)}>Show Older</BtnFilter>
  </Container>
)

const mapDispatchToProps = (dispatch) => {
  return {
    handleSorter: (sortOpt) => (e) => {
      e.preventDefault()
      dispatch(sort(sortOpt))
    }
  }
}

export default connect(null, mapDispatchToProps)(Sorter)
