import { combineReducers } from "redux"
import productReducer from './product'
import userReducer from './user'

const createRootReducer = () => combineReducers({
    userReducer,
    productReducer
})

export default createRootReducer