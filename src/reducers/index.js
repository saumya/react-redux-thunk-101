//
import { combineReducers } from 'redux'

import DummyReducer from './DummyReducer'
import OneReducer from './OneReducer'

const MyAppReducers = combineReducers({DummyReducer,OneReducer});

export default MyAppReducers
