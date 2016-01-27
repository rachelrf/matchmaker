import { MATCH } from '../actions/actions'

export default function counter(state = 0, action) {
  switch (action.type) {
    case MATCH:
      return state + 1
    default:
      return state
  }
}

