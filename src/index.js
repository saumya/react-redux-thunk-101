// Application entry
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AllInOneReducer from './reducers'

import thunk from 'redux-thunk'

import ApplicationContainer from './containers/ApplicationContainer'

// initial state must have keys as per the reducers passed to combineReducers
var initialState = {
  DummyReducer:{version:0,called:0},
  OneReducer:{version:0,called:0}
}
//
//var store = createStore(reducer, initialState,applyMiddleware);
// or
//var store = createStore(reducer,applyMiddleware);
//
let store = createStore(AllInOneReducer,initialState,applyMiddleware(thunk));


const rootEL = document.getElementById('react-app');

render(
  <Provider store={store}>
    <ApplicationContainer />
  </Provider>,
  rootEL
)
