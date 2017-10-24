'use strict'

import React from 'react'
import { css } from 'glamor'
import { connect } from 'react-redux'
import {
  sort
} from 'reducers/sorter/action-creators'
import {
  SHOW_RECENTS,
  SHOW_OLDER
} from 'reducers/sorter/actions'

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

const Sorter = ({ handleSorter }) => (
  <div {...styles.container}>
    <div {...styles.optionsContainer}>
      <a onClick={handleSorter(SHOW_RECENTS)}>Show Most Recent</a>
      <a onClick={handleSorter(SHOW_OLDER)}>Show Older</a>
    </div>
  </div>
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
