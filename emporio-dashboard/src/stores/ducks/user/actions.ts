import { action } from "typesafe-actions";
import { UserActions } from "./types";

export const postLoginRequest = (request: any) => action(UserActions.POST_LOGIN_REQUEST, request)
export const postLoginSuccess = (response: any) => action(UserActions.POST_LOGIN_SUCCESS, response)
export const postLoginFailure = () => action(UserActions.POST_LOGIN_FAILURE)

export const getInfoRequest = (id: number) => action(UserActions.GET_INFO_REQUEST, id)
export const getInfoSuccess = (userInfo: any) => action(UserActions.GET_INFO_SUCCESS, userInfo)
export const getInfoFailure = () => action(UserActions.GET_INFO_FAILURE)

export const getUsersRequest = () => action(UserActions.GET_LIST_REQUEST)
export const getUsersSuccess = (usersList: any) => action(UserActions.GET_LIST_SUCCESS, usersList)
export const getUsersFailure = () => action(UserActions.GET_LIST_FAILURE)

export const newUserRequest = (data: any) => action(UserActions.NEW_REGISTER_REQUEST, data)
export const newUserSuccess = (response: any) => action(UserActions.NEW_REGISTER_SUCCESS, response)
export const newUserFailure = () => action(UserActions.NEW_REGISTER_FAILURE)

export const deleteUserRequest = (id: number) => action(UserActions.DELETE_USER_REQUEST, id)
export const deleteUserSuccess = (response: any) => action(UserActions.DELETE_USER_SUCCESS, response)
export const deleteUserFailure = () => action(UserActions.DELETE_USER_FAILURE)

export const logoutUser = () => action(UserActions.LOGOUT)