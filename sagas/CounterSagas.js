import { call } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import ActionType from '../modules/actions'

export function* increaseSideEffects() {
  yield call(() => console.log('something happened!'))
}

export function* watchIncrease() {
  yield* takeEvery(ActionType.COUNTER.INCREMENTAL, increaseSideEffects)
}
