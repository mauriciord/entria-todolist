'use strict'

import React from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import {
  filter
} from 'reducers/filter/action-creators'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from 'reducers/filter/actions'

const styles = {
  container: css({
    textAlign: 'center'
  }),
  optionsContainer: css({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  })
}

const Filter = ({ handleFilter }) => (
  <div {...styles.container}>
    <div {...styles.optionsContainer}>
      <a onClick={handleFilter(SHOW_ALL)}>Show All</a>
      <a onClick={handleFilter(SHOW_COMPLETED)}>Show Completed</a>
      <a onClick={handleFilter(SHOW_ACTIVE)}>Show Active</a>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    handleFilter: (filterOpt) => (e) => {
      e.preventDefault()
      dispatch(filter(filterOpt))
    }
  }
}

export default connect(null, mapDispatchToProps)(Filter)
