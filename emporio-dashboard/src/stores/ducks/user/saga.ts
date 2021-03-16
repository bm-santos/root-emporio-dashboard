import { UserService } from "../../../services/local/localServices";
import { call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import toast from 'react-hot-toast';
import {
    deleteUserFailure, deleteUserSuccess,
    getInfoFailure, getInfoSuccess,
    getUsersFailure, getUsersSuccess,
    newUserFailure, newUserSuccess,
    postLoginFailure, postLoginSuccess
} from "./actions";

export function* postLoginSaga(request: any) {
    try {
        const response: AxiosResponse = yield call(UserService.login, request.payload)
        yield put(postLoginSuccess(response))
    } catch (err) {
        yield put(postLoginFailure())
        toast.error("Conta não cadastrada")
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

export function* newUserSaga(data: any) {
    try {
        const response: AxiosResponse = yield call(UserService.new, data.payload)
        yield put(newUserSuccess(response))
        toast.success('Cadastrado realizado com sucesso')
    } catch (err) {
        yield put(newUserFailure())
        toast.error('Falha no cadastro. Atualize a página.')
    }
}

export function* deleteUserSaga(id: any) {
    try {
        const response: AxiosResponse = yield call(UserService.delete, id.payload)
        yield put(deleteUserSuccess(response))
        toast.success('Cadastrado excluído com sucesso')
    } catch (err) {
        yield put(deleteUserFailure())
        toast.error('Falha na exclusão. Atualize a página.')
    }
}
