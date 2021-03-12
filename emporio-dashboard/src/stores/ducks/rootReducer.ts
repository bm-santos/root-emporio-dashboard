import { combineReducers } from "redux"
import userReducer from './user'
import productReducer from './beers'

const createRootReducer = () => combineReducers({
    userReducer,
    productReducer
})

export default createRootReducer