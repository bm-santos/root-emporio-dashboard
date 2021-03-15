import { call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { ProductService } from "../../../services/local/localServices";
import {
    getListSuccess, getListFailure,
    newProductSuccess, newProductFailure,
    deleteProductSuccess, deleteProductFailure
} from "./actions";
import toast from 'react-hot-toast';

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
        toast.success('Produto cadastrado com sucesso')
    } catch (err) {
        yield put(newProductFailure())
        toast.error('Falha no cadastro. Atualize a página.')
    }
}

export function* deleteProductSaga(id: any) {
    try {
        yield call(ProductService.delete, id.payload)
        yield put(deleteProductSuccess(id.payload))
        toast.success('Produto excluído com sucesso')
    } catch (err) {
        yield put(deleteProductFailure())
        toast.error('Falha na exclusão. Atualize a página.')
    }
}

