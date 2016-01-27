import {INITIAL_STATE} from '../actions/actions';
import {List, Map} from 'immutable';

function next(state) {
  const entries = state.get('entries')
  // console.log('state',state, typeof state)

  console.log('new state', state.merge({
    matchPossibilities: entries.slice(0,2),
    entries: entries
  }))
  return state.merge({
    matchPossibilities: entries.slice(0,2)
  });
}

export default function entries(state = INITIAL_STATE, action) {
  console.log('initial state', state)
  switch (action.type) {

  case 'SET_ENTRIES':
    console.log('next')
    return next(state);
  }

  return state;
}


