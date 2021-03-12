import { action } from "typesafe-actions";
import { ProductActions } from "./types";

export const getListRequest = (auth: any) => action(ProductActions.GET_LIST_REQUEST, auth)
export const getListSuccess = (beerList: any) => action(ProductActions.GET_LIST_SUCCESS, beerList)
export const getListFailure = () => action(ProductActions.GET_LIST_FAILURE)