import { Reducer } from "redux";
import { UserActions } from "./types";
import { decodeToken } from "react-jwt"
import { getInfoRequest } from "./actions";
import { useDispatch } from "react-redux";
const INITIAL_STATE: any = {
    isUserLogged: false,
    userID: 0,
    role: null,
    name: '',
    email: ''
}

const userReducer: Reducer = (state = INITIAL_STATE, action: any) => {
    const id = state.userID
    switch (action.type) {
        case UserActions.POST_LOGIN_REQUEST:
            console.log(action.payload)
            return {
                ...state,
            }
        case UserActions.POST_LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.data.accessToken)
            return {
                ...state,
                isUserLogged: true,
                userID: decodeToken(action.payload.data.accessToken).sub
            }
        case UserActions.POST_LOGIN_FAILURE:
            return {
                ...state,
                isUserLogged: false
            }
        case UserActions.GET_INFO_REQUEST:
            return {
                ...state,
            }
        case UserActions.GET_INFO_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isUserLogged: true,
                role: action.payload.data.role,
                name: action.payload.data.name,
                email: action.payload.data.email
            }
        case UserActions.GET_INFO_FAILURE:
            return {
                ...state,
                isUserLogged: false
            }
        default: return state
    }
}

export default userReducer