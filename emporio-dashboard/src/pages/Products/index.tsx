import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import Content from "../../components/Content"
import ListProducts from "../../components/Products/ListProducts"
import NewProduct from "../../components/Products/NewProduct"

export default function ProductsPage() {
    const { isLogged } = useSelector((state: any) => state.userReducer)
    const { beerList } = useSelector((state: any) => state.productReducer)

    return (
        <>
            {!isLogged
                ? <Redirect to="/login" exact />
                : <Content>
                    <h2>
                        Produtos cadastrados: {beerList?.length}
                    </h2>
                    <NewProduct />
                    <ListProducts />
                </Content>
            }
        </>
    )
}