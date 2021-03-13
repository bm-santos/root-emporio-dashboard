import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Container from "../../components/Container";
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

    const getUsers = () => {
        dispatch(getUsersRequest())
    }

    const getProducts = () => {
        dispatch(getListRequest())
    }

    return (
        <Container>
            {!isLogged
                ? <Redirect to="/login" exact />
                : beerList.length > 0 && (
                    <>
                        <p>Total de produtos: {beerList?.length}</p>
                        <p>Total de usuários: {internalUsers?.length}</p>
                    </>
                )}
        </Container>
    )
}