export enum UserActions {
    GET_REGISTER_REQUEST = '@user/GET_REGISTER_REQUEST',
    GET_REGISTER_SUCCESS = '@user/GET_REGISTER_SUCCESS',
    GET_REGISTER_FAILURE = '@user/GET_REGISTER_FAILURE',

    POST_LOGIN_REQUEST = '@user/POST_LOGIN_REQUEST',
    POST_LOGIN_SUCCESS = '@user/POST_LOGIN_SUCCESS',
    POST_LOGIN_FAILURE = '@user/POST_LOGIN_FAILURE',

    GET_INFO_REQUEST = '@user/GET_INFO_REQUEST',
    GET_INFO_SUCCESS = '@user/GET_INFO_SUCCESS',
    GET_INFO_FAILURE = '@user/GET_INFO_FAILURE',
}

export interface UserCredentials {
    email: string,
    password: string
}