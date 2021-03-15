export enum UserActions {
    POST_LOGIN_REQUEST = '@user/POST_LOGIN_REQUEST',
    POST_LOGIN_SUCCESS = '@user/POST_LOGIN_SUCCESS',
    POST_LOGIN_FAILURE = '@user/POST_LOGIN_FAILURE',

    GET_INFO_REQUEST = '@user/GET_INFO_REQUEST',
    GET_INFO_SUCCESS = '@user/GET_INFO_SUCCESS',
    GET_INFO_FAILURE = '@user/GET_INFO_FAILURE',

    GET_LIST_REQUEST = '@users/GET_LIST_REQUEST',
    GET_LIST_SUCCESS = '@users/GET_LIST_SUCCESS',
    GET_LIST_FAILURE = '@users/GET_LIST_FAILURE',

    NEW_REGISTER_REQUEST = '@user/NEW_REGISTER_REQUEST',
    NEW_REGISTER_SUCCESS = '@user/NEW_REGISTER_SUCCESS',
    NEW_REGISTER_FAILURE = '@user/NEW_REGISTER_FAILURE',

    DELETE_USER_REQUEST = '@user/DELETE_USER_REQUEST',
    DELETE_USER_SUCCESS = '@user/DELETE_USER_SUCCESS',
    DELETE_USER_FAILURE = '@user/DELETE_USER_FAILURE',

    LOGOUT = '@LOGOUT',
}

export interface UserArray {
    name: string,
    email: string,
    password: string,
    role: string,
}
export interface UserLogin {
    email: string,
    password: string,
}

export interface UserState {
    isLogged: boolean,
    userID: number | null,
    isAdmin: boolean,
    isEditor: boolean,
    role: string,
    name: string,
    internalUsers: UserState[],
    deletedUserID: number | null
}