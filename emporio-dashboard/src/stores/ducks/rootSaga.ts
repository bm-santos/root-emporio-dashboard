
import { takeLatest, all } from "redux-saga/effects"
import { getListSaga } from "./beers/saga"
import { ProductActions } from "./beers/types"
import { getInfoSaga, postLoginSaga, getUsersSaga } from "./user/saga"
import { UserActions } from "./user/types"

export default function* rootSaga(): any {
    return yield all([
        takeLatest(UserActions.POST_LOGIN_REQUEST, postLoginSaga),
        takeLatest(UserActions.GET_INFO_REQUEST, getInfoSaga),

        takeLatest(UserActions.GET_USERS_REQUEST, getUsersSaga),

        takeLatest(ProductActions.GET_LIST_REQUEST, getListSaga),
    ])
}