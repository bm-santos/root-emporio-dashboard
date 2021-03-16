import { getInfoRequest, getUsersRequest } from "../../stores/ducks/user/actions";
import { getListRequest } from "../../stores/ducks/product/actions";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../components/Content";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Helmet } from "react-helmet"

export default function HomePage() {
    const { userID, isLogged, internalUsers, isAdmin } = useSelector((state: any) => state.userReducer)
    const { productList } = useSelector((state: any) => state.productReducer)
    const dispatch = useDispatch()
    const [goToLink, setGoToLink] = useState<string>('')

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
            <Helmet>
                <title>Home - Dashboard Empório da Cerveja</title>
            </Helmet>
            {!isLogged
                ? <Redirect to="/login" exact />
                : <Content>
                    <div className="content-home">
                        <div className="total"
                            onClick={() => setGoToLink("products")}>
                            {goToLink === "products" && <Redirect to="/products" exact />}
                            <p>Produtos cadastrados</p>
                            <span>{productList?.length}</span>
                        </div>
                        {isAdmin
                            ? <div className="total" onClick={() => setGoToLink("users")}>
                                {goToLink === "users" && <Redirect to="/users" exact />}
                                <p>Usuários cadastrados</p>
                                <span>{internalUsers?.length}</span>
                            </div>
                            : <div className="editor-view" >
                                <p>Usuários cadastrados</p>
                                <span>{internalUsers?.length}</span>
                            </div>
                        }
                    </div>
                </Content>
            }
        </>
    )
}