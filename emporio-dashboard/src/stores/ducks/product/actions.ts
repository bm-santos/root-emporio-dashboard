import { action } from "typesafe-actions";
import { ProductActions, ProductArray } from "./types";

export const getListRequest = () => action(ProductActions.GET_LIST_REQUEST)
export const getListSuccess = (beerList: any) => action(ProductActions.GET_LIST_SUCCESS, beerList)
export const getListFailure = () => action(ProductActions.GET_LIST_FAILURE)

export const newProductRequest = (request: any) => action(ProductActions.NEW_PRODUCT_REQUEST, request)
export const newProductSuccess = (response: any) => action(ProductActions.NEW_PRODUCT_SUCCESS, response)
export const newProductFailure = () => action(ProductActions.NEW_PRODUCT_FAILURE)

export const deleteProductRequest = (id: number) => action(ProductActions.DELETE_PRODUCT_REQUEST, id)
export const deleteProductSuccess = (response: any) => action(ProductActions.DELETE_PRODUCT_SUCCESS, response)
export const deleteProductFailure = () => action(ProductActions.DELETE_PRODUCT_FAILURE)
