
import { takeLatest, all } from "redux-saga/effects"
import { getInfoSaga, postLoginSaga } from "./user/saga"
import { UserActions } from "./user/types"

export default function* rootSaga(): any {
    return yield all([
        takeLatest(UserActions.POST_LOGIN_REQUEST, postLoginSaga),
        takeLatest(UserActions.GET_INFO_REQUEST, getInfoSaga)
    ])
}