import { Reducer } from "redux";
import { UserActions, UserState } from "./types";
import { decodeToken } from "react-jwt"

const INITIAL_STATE: UserState = {
    isLogged: false,
    userID: null,
    isAdmin: false,
    isEditor: false,
    role: '',
    name: '',
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
                isAdmin: admin,
                isEditor: editor,
                role: action.payload.data.role,
                name: action.payload.data.name,
            }
        case UserActions.GET_INFO_FAILURE:
            return { ...state, }
        case UserActions.GET_LIST_REQUEST:
            return { ...state, }

        case UserActions.GET_LIST_SUCCESS:
            return {
                ...state,
                internalUsers: action.payload.data
            }
        case UserActions.GET_LIST_FAILURE:
            return { ...state, }
        case UserActions.LOGOUT:
            localStorage.clear()
            return {
                ...state,
                isLogged: false
            }
        case UserActions.NEW_REGISTER_REQUEST:
            let updatedId = 0
            if (updatedInternalUsers.length === 0) {
                updatedId = 1
            } else {
                updatedId = updatedInternalUsers[updatedInternalUsers.length - 1].id + 1
            }

            const request = {
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                role: action.payload.role,
                id: updatedId
            }
            updatedInternalUsers.push(request)
            return { ...state, }
        case UserActions.NEW_REGISTER_SUCCESS:
            return {
                ...state,
                internalUsers: updatedInternalUsers
            }
        case UserActions.NEW_REGISTER_FAILURE:
            updatedInternalUsers.pop()

            return {
                ...state,
                internalUsers: updatedInternalUsers
            }
        case UserActions.DELETE_USER_REQUEST:
            deletedUserID = action.payload
            return {
                ...state,
                deletedUserID: deletedUserID,
                //internalUsers: updatedInternalUsers
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
            for (let i = 0; i < updatedInternalUsers.length; i++)
                if (updatedInternalUsers[i].id === deletedUserID)
                    updatedInternalUsers.splice(i, 1)
            return {
                ...state,
                // internalUsers: updatedInternalUsers
            }
        default: return state
    }
}

export default userReducer