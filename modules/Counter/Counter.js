import keyMirror from 'key-mirror-nested'
import { Record } from 'immutable'
import { getFieldFromState, incField, decField } from '../utils/immutableUtils'

export const CounterFields = keyMirror({
  total: null,
})

export const Counter = {
  id: 'Counter',
  state: Record({
    [CounterFields.total]: 0,
  }),
  create: () => new Counter.state(),
  increase: incField(CounterFields.total),
  decrease: decField(CounterFields.total),
}

const getTotal = getFieldFromState(Counter)(CounterFields.total)

export const CounterSelectors = {
  getTotal,
}
