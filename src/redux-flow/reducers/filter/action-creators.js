'use strict'

import {
  SET_VISIBILITY_FILTER,
  // SET_SORTER_FILTER
} from './actions'

export const filter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: { filter }
  }
}

// export const sort = (sorter) => {
//   return {
//     type: SET_SORTER_FILTER,
//     payload: { sorter }
//   }
// }
