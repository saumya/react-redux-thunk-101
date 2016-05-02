// Application entry
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AllReducers from './reducers'

import thunk from 'redux-thunk'

import MyApp from './components/MyApp'

let store = createStore(AllReducers,applyMiddleware(thunk));

const rootEL = document.getElementById('react-app');

render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  rootEL
)
