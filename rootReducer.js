import { combineReducers } from 'redux-immutable'
import { Counter, counterReducer } from './modules/Counter'

const rootReducer = combineReducers({
  [Counter.id]: counterReducer,
})

export default rootReducer
