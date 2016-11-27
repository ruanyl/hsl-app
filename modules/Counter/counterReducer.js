import { createReducer } from '../utils/reducerUtils'
import { Counter } from './Counter'
import ActionType from '../actions'

export const counterReducer = createReducer(Counter.create(), {
  [ActionType.COUNTER.INCREMENTAL]: Counter.increase,
  [ActionType.COUNTER.DECREMENTAL]: Counter.decrease,
})

export const increase = () => ({ type: ActionType.COUNTER.INCREMENTAL })
export const decrease = () => ({ type: ActionType.COUNTER.DECREMENTAL })
