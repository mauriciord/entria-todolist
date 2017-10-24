'use strict'

import React from 'react'
import { css } from 'glamor'

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

const Filter = () => (
  <div {...styles.container}>
    <div {...styles.optionsContainer}>
      <span>All</span>
      <span>Completed</span>
      <span>Active</span>
    </div>
  </div>
)

export default Filter
