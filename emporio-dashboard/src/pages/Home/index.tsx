import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { useAdmin, useEditor } from "../../hooks/useRole";
import { getListRequest } from "../../stores/ducks/beers/actions";
import { getInfoRequest, getUsersRequest } from "../../stores/ducks/user/actions";

export default function HomePage() {
    const { userID, role, isLogged, internalUsers } = useSelector((state: any) => state.userReducer)
    const { beerList } = useSelector((state: any) => state.productReducer)
    const isAdmin = useAdmin()
    const isEditor = useEditor()
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const auth = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    useEffect(() => {
        if (isLogged) {
            dispatch(getInfoRequest(userID))
            getProducts()
            getUsers()
        }
    }, [])

    const getProducts = () => {
        return dispatch(getListRequest(auth))
    }
    const getUsers = () => {
        return dispatch(getUsersRequest())
    }


    return (
        <>
            {!isLogged && <Redirect to="/login" exact />}
            <p>Home</p>
            {beerList?.length > 0 && (
                <>
                    <p>Total de produtos: {beerList?.length}</p>
                    <p>Total de usuários: {internalUsers?.length}</p>
                </>
            )}
            {isAdmin &&
                <p>is admin</p>}
            {isEditor &&
                <p>is editor</p>}
        </>
    )
}