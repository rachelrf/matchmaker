import {List, Map} from 'immutable';
export const MATCH = 'MATCH'
export const SET_ENTRIES = 'SET_ENTRIES'

export const INITIAL_STATE = Map().set('entries',['Constantine', 'Gerald', 'Maximo', 'Vera', 'Bianca', 'Natasha'])

export function setEntries(state, entries) {
  return {
    type: SET_ENTRIES
  }
}

export function match() {
  return {
    type: MATCH
  }
}

//////// Examples of more involved actions ////////////

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState()

//     if (counter % 2 === 0) {
//       return
//     }

//     dispatch(increment())
//   }
// }

// export function incrementAsync(delay = 1000) {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment())
//     }, delay)
//   }
// }
