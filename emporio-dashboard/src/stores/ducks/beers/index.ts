import { Reducer } from "redux"
import { ProductActions } from "./types"

const INITIAL_STATE: any = {
    beerList: []
}

const productReducer: Reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ProductActions.GET_LIST_REQUEST:
            return {
                ...state
            }
        case ProductActions.GET_LIST_SUCCESS:
            return {
                ...state,
                beerList: action.payload.data
            }
        case ProductActions.GET_LIST_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}
export default productReducer