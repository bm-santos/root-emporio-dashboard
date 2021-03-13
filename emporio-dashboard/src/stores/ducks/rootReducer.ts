import { combineReducers } from "redux"
import userReducer from './user'
import productReducer from './product'

const createRootReducer = () => combineReducers({
    userReducer,
    productReducer
})

export default createRootReducer