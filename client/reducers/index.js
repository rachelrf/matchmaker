import { combineReducers } from 'redux'
import counter from './counter'
import entries from './entries'

// combineReducers turns an object whose values are different reducing functions into a single  
// reducing function you can pass to createStore
//
// A popular convention is to name reducers after the state slices they manage
// combineReducers({ counter, todos }) = combineReducers({ counter: counter, todos: todos })
const rootReducer = combineReducers({
  counter, entries
})

export default rootReducer
