// Application entry
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AllReducers from './reducers'

import MyApp from './components/MyApp'

let store = createStore(AllReducers);

const rootEL = document.getElementById('react-app');

render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  rootEL
)
