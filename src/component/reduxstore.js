import {legacy_createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import myReducer from './reducer'




const reduxstore = legacy_createStore(myReducer, applyMiddleware(logger,thunk))

export default reduxstore