import { Reducer } from "redux"
import { ProductActions } from "./types"

const INITIAL_STATE: any = {
    beerList: [],
    deletedBeerID: null,
    retry: false
}

const productReducer: Reducer = (state = INITIAL_STATE, action: any) => {
    const updatedBeerList = state.beerList
    let deletedBeerID = state.deletedBeerID
    switch (action.type) {
        case ProductActions.GET_LIST_REQUEST:
            console.log(action.payload)
            return {
                ...state,
            }
        case ProductActions.GET_LIST_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                beerList: action.payload.data
            }
        case ProductActions.GET_LIST_FAILURE:
            console.log(action.payload)
            return {
                ...state,
                retry: true
            }
        case ProductActions.NEW_PRODUCT_REQUEST:
            return { ...state }
        case ProductActions.NEW_PRODUCT_SUCCESS:
            updatedBeerList.push(action.payload.data)
            return {
                ...state,
                beerList: updatedBeerList
            }
        case ProductActions.NEW_PRODUCT_FAILURE:
            return { ...state }
        case ProductActions.DELETE_PRODUCT_REQUEST:
            deletedBeerID = action.payload
            return {
                ...state,
                deletedBeerID: deletedBeerID
            }
        case ProductActions.DELETE_PRODUCT_SUCCESS:
            for (let i = 0; i < updatedBeerList.length; i++)
                if (updatedBeerList[i].id === deletedBeerID)
                    updatedBeerList.splice(i, 1)
            return {
                ...state,
                beerList: updatedBeerList
            }
        case ProductActions.DELETE_PRODUCT_FAILURE:
            return { ...state }
        default:
            return state
    }
}
export default productReducer