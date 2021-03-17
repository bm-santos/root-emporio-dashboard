import ListProducts from "../../components/Products/ListProducts"
import NewProduct from "../../components/Products/NewProduct"
import Content from "../../components/Content"
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { Helmet } from "react-helmet"

export default function ProductsPage() {
    const { isLogged } = useSelector((state: any) => state.userReducer)
    const { productList } = useSelector((state: any) => state.productReducer)

    return (
        <div className="container-products">
            <Helmet>
                <title>Produtos - Dashboard Empório da Cerveja</title>
            </Helmet>
            {!isLogged
                ? <Redirect to="/login" exact />
                : <Content>
                    <h2>
                        Produtos cadastrados: <span>{productList?.length}</span>
                    </h2>
                    <NewProduct />
                    <ListProducts />
                </Content>
            }
        </div>
    )
}