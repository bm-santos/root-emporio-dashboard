import { Reducer } from "redux"
import { ProductActions, ProductState } from "./types"

const INITIAL_STATE: ProductState = {
    productList: [],
    deletedProductId: null
}

const productReducer: Reducer = (state = INITIAL_STATE, action: any) => {
    const updatedBeerList = state.productList
    let deletedProductId = state.deletedProductId
    switch (action.type) {
        case ProductActions.GET_LIST_REQUEST:
            return { ...state }
        case ProductActions.GET_LIST_SUCCESS:
            return {
                ...state,
                productList: action.payload.data
            }
        case ProductActions.GET_LIST_FAILURE:
            return { ...state }
        case ProductActions.NEW_PRODUCT_REQUEST:
            return { ...state }
        case ProductActions.NEW_PRODUCT_SUCCESS:
            updatedBeerList.push(action.payload.data)
            return {
                ...state,
                productList: updatedBeerList
            }
        case ProductActions.NEW_PRODUCT_FAILURE:
            return { ...state }
        case ProductActions.DELETE_PRODUCT_REQUEST:
            deletedProductId = action.payload
            return {
                ...state,
                deletedProductId: deletedProductId
            }
        case ProductActions.DELETE_PRODUCT_SUCCESS:
            for (let i = 0; i < updatedBeerList.length; i++)
                if (updatedBeerList[i].id === deletedProductId)
                    updatedBeerList.splice(i, 1)
            return {
                ...state,
                productList: updatedBeerList
            }
        case ProductActions.DELETE_PRODUCT_FAILURE:
            return { ...state }
        default:
            return state
    }
}
export default productReducer