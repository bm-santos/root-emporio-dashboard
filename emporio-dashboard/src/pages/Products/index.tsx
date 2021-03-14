import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import Content from "../../components/Content"
import ListProducts from "../../components/Products/ListProducts"
import NewProduct from "../../components/Products/NewProduct"

export default function ProductsPage() {
    const { isLogged } = useSelector((state: any) => state.userReducer)
    const { beerList } = useSelector((state: any) => state.productReducer)

    return (
        <div style={{ maxWidth: "95%", margin: "0 auto" }}>
            {!isLogged
                ? <Redirect to="/login" exact />
                : <Content>
                    <p style={{ marginLeft: "20px" }}>
                        <strong>Produtos cadastrados</strong>: {beerList?.length}
                    </p>
                    <NewProduct />
                    <ListProducts />
                </Content>
            }
        </div>
    )
}