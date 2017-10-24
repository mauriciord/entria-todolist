'use strict'

import { orderBy } from 'lodash'
import {
  SHOW_RECENTS,
  SHOW_OLDER
} from 'reducers/sorter/actions'

export const sorterFilter = (todos, sorterFilter) => {
  switch (sorterFilter) {
    case SHOW_RECENTS:
      return orderBy(todos, 'creation', 'asc')
    case SHOW_OLDER:
      return orderBy(todos, 'creation', 'desc')
  }
}
