import { Reducer } from "redux";
import { UserActions } from "./types";
import { decodeToken } from "react-jwt"

const INITIAL_STATE: any = {
    isLogged: false,
    userID: '',
    role: '',
    name: '',
    email: '',
    internalUsers: []
}

const userReducer: Reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case UserActions.POST_LOGIN_REQUEST:
            return {
                ...state,
            }
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
            return {
                ...state,
            }
        case UserActions.GET_INFO_SUCCESS:
            return {
                ...state,
                isLogged: true,
                role: action.payload.data.role,
                name: action.payload.data.name,
                email: action.payload.data.email
            }
        case UserActions.GET_INFO_FAILURE:
            return {
                ...state,
            }
        case UserActions.GET_USERS_REQUEST:
            return {
                ...state,
            }
        case UserActions.GET_USERS_SUCCESS:
            return {
                ...state,
                internalUsers: action.payload.data
            }
        case UserActions.GET_USERS_FAILURE:
            return {
                ...state,
            }
        default: return state
    }
}

export default userReducer