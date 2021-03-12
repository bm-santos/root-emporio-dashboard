import { AxiosResponse } from "axios";
import { call, put } from "@redux-saga/core/effects";
import { UserService } from "../../../services/local/localServices";
import { getInfoFailure, getInfoSuccess, getUsersFailure, getUsersSuccess, postLoginFailure, postLoginSuccess } from "./actions";

export function* postLoginSaga(request: any) {
    try {
        const response: AxiosResponse = yield call(UserService.login, request.payload)
        yield put(postLoginSuccess(response))

    } catch (err) {
        yield put(postLoginFailure())
    }
}
export function* getInfoSaga(id: any) {
    try {
        const response: AxiosResponse = yield call(UserService.getUser, id.payload)
        yield put(getInfoSuccess(response))
    } catch (err) {
        yield put(getInfoFailure())
    }
}

export function* getUsersSaga() {
    try {
        const response: AxiosResponse = yield call(UserService.getList)
        yield put(getUsersSuccess(response))
    } catch (err) {
        yield put(getUsersFailure())
    }
}
