import { call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { ProductService } from "../../../services/local/localServices";
import { getListFailure, getListSuccess } from "./actions";

export function* getListSaga(auth: any) {
    try {
        const response: AxiosResponse = yield call(ProductService.getList, auth.payload)
        yield put(getListSuccess(response))
    } catch (err) {
        yield put(getListFailure())
    }
}