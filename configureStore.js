import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSagas from './sagas'

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  )
  sagaMiddleware.run(rootSagas)

  return store
}

export default configureStore
