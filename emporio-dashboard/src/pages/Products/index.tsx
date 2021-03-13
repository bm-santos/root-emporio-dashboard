import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import Container from "../../components/Container"
import { deleteProductRequest, newProductRequest } from "../../stores/ducks/product/actions"

export default function ProductsPage() {
    const { isLogged, isAdmin } = useSelector((state: any) => state.userReducer)
    const { beerList } = useSelector((state: any) => state.productReducer)
    const [showSection, showRegisterSection] = useState<boolean>(false)
    const inputTitle = useRef<HTMLInputElement>(null)
    const inputPrice = useRef<HTMLInputElement>(null)
    const inputDescription = useRef<HTMLInputElement>(null)
    const inputImage = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const show = () => {
        showRegisterSection(!showSection)
    }
    const newProduct = () => {
        const request = {
            title: inputTitle.current?.value,
            price: inputPrice.current?.value,
            description: inputDescription.current?.value,
            image: inputImage.current?.value
        }
        return dispatch(newProductRequest(request))
    }
    return (
        <>
            {!isLogged
                ? <Redirect to="/login" exact />
                : <Container>
                    <p>Products: {beerList?.length}</p>
                    <div>
                        <p onClick={show}>[+] Cadastrar produto</p>
                        {showSection &&
                            <>
                                <input
                                    aria-label="Title"
                                    placeholder="Title"
                                    type="text"
                                    ref={inputTitle} />
                                <input
                                    aria-label="Price"
                                    placeholder="Price"
                                    type="text"
                                    ref={inputPrice}
                                    defaultValue="R$ " />
                                <input
                                    aria-label="Description"
                                    placeholder="Description"
                                    type="text"
                                    ref={inputDescription} />
                                <input
                                    aria-label="Thumbnail"
                                    placeholder="Thumbnail"
                                    type="text"
                                    ref={inputImage} />
                                <button onClick={newProduct} >Send</button>
                            </>}
                    </div>
                    <div>
                        <p>Listar produtos</p>
                        {isLogged && beerList?.slice(0).reverse().map((beer: any) => (
                            <div key={beer.id}>
                                <img style={{ maxWidth: "50px" }} src={beer.image} alt={beer.description} />
                                <p>{beer.title}</p>
                                <p>{beer.price}</p>
                                {isAdmin &&
                                    <button onClick={() => dispatch(deleteProductRequest(beer.id))}>Delete</button>
                                }
                            </div>
                        ))}
                    </div>
                </Container>
            }
        </>
    )
}