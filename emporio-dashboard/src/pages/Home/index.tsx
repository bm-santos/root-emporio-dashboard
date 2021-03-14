import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Content from "../../components/Content";
import { getListRequest } from "../../stores/ducks/product/actions";
import { getInfoRequest, getUsersRequest } from "../../stores/ducks/user/actions";

export default function HomePage() {
    const { userID, isLogged, internalUsers } = useSelector((state: any) => state.userReducer)
    const { beerList } = useSelector((state: any) => state.productReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLogged) {
            dispatch(getInfoRequest(userID))
            getUsers()
            getProducts()
        }
    }, [])

    const getUsers = () => { dispatch(getUsersRequest()) }

    const getProducts = () => { dispatch(getListRequest()) }

    return (
        <>
            {!isLogged
                ? <Redirect to="/login" exact />
                : internalUsers.length > 0 && (
                    <Content>
                        <p>Total de produtos: {beerList?.length}</p>
                        <p>Total de usuários: {internalUsers?.length}</p>
                    </Content>
                )}
        </>
    )
}