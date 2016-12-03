import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { Root } from './containers/Root'

injectTapEventPlugin()
const store = configureStore()

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
