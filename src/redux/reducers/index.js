import CountReducer from './countReducers'
import { combineReducers } from 'redux'

export default combineReducers({
    USER_DATA : CountReducer,
})