import { fork } from 'redux-saga/effects'
import {
  watchIncrease,
} from './CounterSagas'

export default function* rootSagas() {
  yield [
    fork(watchIncrease),
  ]
}
