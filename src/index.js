// Application entry
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AllInOneReducer from './reducers'

import thunk from 'redux-thunk'

import ApplicationContainer from './containers/ApplicationContainer'

import {initialStateUtil, getInitialState,generateTree} from './util/initialStateUtil'

//
//var store = createStore(reducer, initialState,applyMiddleware);
// or
//var store = createStore(reducer,applyMiddleware);
//
let store = createStore(AllInOneReducer,getInitialState(),applyMiddleware(thunk));
// just a check
generateTree();

const rootEL = document.getElementById('react-app');

render(
  <Provider store={store}>
    <ApplicationContainer />
  </Provider>,
  rootEL
)
