
import { takeLatest, all } from "redux-saga/effects"
import { deleteProductSaga, getListSaga, newProductSaga } from "./product/saga"
import { ProductActions } from "./product/types"
import { getInfoSaga, postLoginSaga, getUsersSaga, newUserSaga, deleteUserSaga } from "./user/saga"
import { UserActions } from "./user/types"

export default function* rootSaga(): any {
    return yield all([
        takeLatest(UserActions.POST_LOGIN_REQUEST, postLoginSaga),
        takeLatest(UserActions.GET_INFO_REQUEST, getInfoSaga),
        takeLatest(UserActions.GET_LIST_REQUEST, getUsersSaga),
        takeLatest(UserActions.NEW_REGISTER_REQUEST, newUserSaga),
        takeLatest(UserActions.DELETE_USER_REQUEST, deleteUserSaga),

        takeLatest(ProductActions.GET_LIST_REQUEST, getListSaga),
        takeLatest(ProductActions.NEW_PRODUCT_REQUEST, newProductSaga),
        takeLatest(ProductActions.DELETE_PRODUCT_REQUEST, deleteProductSaga),
    ])
}