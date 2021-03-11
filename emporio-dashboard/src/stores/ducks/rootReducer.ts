import { combineReducers } from "redux"
import userReducer from './user'

const createRootReducer = () => combineReducers({
    userReducer,
})

export default createRootReducer