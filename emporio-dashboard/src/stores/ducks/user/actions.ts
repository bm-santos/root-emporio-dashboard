import { action } from "typesafe-actions";
import { UserActions } from "./types";

export const postLoginRequest = (request: any) => action(UserActions.POST_LOGIN_REQUEST, request)
export const postLoginSuccess = (request: any) => action(UserActions.POST_LOGIN_SUCCESS, request)
export const postLoginFailure = () => action(UserActions.POST_LOGIN_FAILURE)

export const getInfoRequest = (id: any) => action(UserActions.GET_INFO_REQUEST, id)
export const getInfoSuccess = (data: any) => action(UserActions.GET_INFO_SUCCESS, data)
export const getInfoFailure = () => action(UserActions.GET_INFO_FAILURE)

export const getUsersRequest = () => action(UserActions.GET_USERS_REQUEST)
export const getUsersSuccess = (data: any) => action(UserActions.GET_USERS_SUCCESS, data)
export const getUsersFailure = () => action(UserActions.GET_USERS_FAILURE)