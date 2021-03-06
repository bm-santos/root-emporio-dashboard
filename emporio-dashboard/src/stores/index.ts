import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, Store, applyMiddleware } from "redux"
import createRootReducer from './ducks/rootReducer'
import createSagaMiddleware from "redux-saga"
import rootSaga from "./ducks/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
    sagaMiddleware
]
const store: Store = createStore(
    createRootReducer(),
    composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store
