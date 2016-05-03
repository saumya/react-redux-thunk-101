// Application entry
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AllReducers from './reducers'

import thunk from 'redux-thunk'

import ApplicationContainer from './containers/ApplicationContainer'

let store = createStore(AllReducers,applyMiddleware(thunk));

const rootEL = document.getElementById('react-app');

render(
  <Provider store={store}>
    <ApplicationContainer />
  </Provider>,
  rootEL
)
