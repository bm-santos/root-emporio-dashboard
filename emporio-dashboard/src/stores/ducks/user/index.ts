import { Reducer } from "redux";
import { UserActions } from "./types";
import { decodeToken } from "react-jwt"
import { useState } from "react";

const INITIAL_STATE: any = {
    isLogged: false,
    userID: '',
    role: '',
    isAdmin: false,
    isEditor: false,
    name: '',
    email: '',
    internalUsers: [],
    deletedUserID: null
}

const userReducer: Reducer = (state = INITIAL_STATE, action: any) => {
    let admin = state.isAdmin
    let editor = state.isEditor
    const updatedInternalUsers = state.internalUsers
    let deletedUserID = state.deletedUserID
    switch (action.type) {
        case UserActions.POST_LOGIN_REQUEST:
            return state

        case UserActions.POST_LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.data.accessToken)
            return {
                ...state,
                isLogged: true,
                userID: decodeToken(action.payload.data.accessToken).sub
            }
        case UserActions.POST_LOGIN_FAILURE:
            return {
                ...state,
                isLogged: false
            }
        case UserActions.GET_INFO_REQUEST:
            return state
        case UserActions.GET_INFO_SUCCESS:
            action.payload.data.role === "admin" ? admin = true : admin = false;
            action.payload.data.role === "editor" ? editor = true : editor = false;

            return {
                ...state,
                isLogged: true,
                role: action.payload.data.role,
                isAdmin: admin,
                isEditor: editor,
                name: action.payload.data.name,
                email: action.payload.data.email
            }
        case UserActions.GET_INFO_FAILURE:
            return {
                ...state,
            }
        case UserActions.GET_USERS_REQUEST:
            return state

        case UserActions.GET_USERS_SUCCESS:
            return {
                ...state,
                internalUsers: action.payload.data
            }
        case UserActions.GET_USERS_FAILURE:
            return state
        case UserActions.LOGOUT:
            localStorage.clear()
            return {
                ...state,
                isLogged: false
            }
        case UserActions.NEW_REGISTER_REQUEST:
            updatedInternalUsers.push(action.payload)
            return {
                ...state,
                internalUsers: updatedInternalUsers
            }
        case UserActions.NEW_REGISTER_SUCCESS:
            return {
                ...state,
                internalUsers: updatedInternalUsers
            }
        case UserActions.NEW_REGISTER_FAILURE:
            return state
        case UserActions.DELETE_USER_REQUEST:
            deletedUserID = action.payload
            return {
                ...state,
                deletedUserID: deletedUserID
            }
        case UserActions.DELETE_USER_SUCCESS:
            for (let i = 0; i < updatedInternalUsers.length; i++)
                if (updatedInternalUsers[i].id === deletedUserID)
                    updatedInternalUsers.splice(i, 1)

            return {
                ...state,
                internalUsers: updatedInternalUsers
            }
        case UserActions.DELETE_USER_FAILURE:
            return state
        default: return state
    }
}

export default userReducer