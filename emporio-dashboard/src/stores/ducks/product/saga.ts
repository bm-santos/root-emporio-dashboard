import { call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { ProductService } from "../../../services/local/localServices";
import {
    getListSuccess, getListFailure,
    newProductSuccess, newProductFailure,
    deleteProductSuccess, deleteProductFailure
} from "./actions";

export function* getListSaga() {
    try {
        const response: AxiosResponse = yield call(ProductService.getList)
        yield put(getListSuccess(response))
    } catch (err) {
        yield put(getListFailure())
    }
}

export function* newProductSaga(data: any) {
    try {
        const response: AxiosResponse = yield call(ProductService.new, data.payload)
        yield put(newProductSuccess(response))
    } catch (err) {
        yield put(newProductFailure())
    }
}

export function* deleteProductSaga(id: any) {
    try {
        yield call(ProductService.delete, id.payload)
        yield put(deleteProductSuccess(id.payload))
    } catch (err) {
        yield put(deleteProductFailure())
    }
}

