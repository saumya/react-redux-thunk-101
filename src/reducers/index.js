//
import { combineReducers } from 'redux'

import DummyReducer from './DummyReducer'
import OneReducer from './OneReducer'
import UIStateReducer from './UIStateReducer'

// Where the names are same as the State/Data , there is no need for a key-value, its automatic.
// Else provide a matching key-value pair Data-Reducer
const MyAppReducers = combineReducers({
  UIState:UIStateReducer,
  DummyReducer,
  OneReducer
});

export default MyAppReducers
