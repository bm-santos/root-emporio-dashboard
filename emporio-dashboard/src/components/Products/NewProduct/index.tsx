import { newProductRequest } from "../../../stores/ducks/product/actions";
import { ProductArray } from "../../../stores/ducks/product/types";
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { BtnCancel, BtnRegister, BtnSave } from "../../Buttons";


export default function NewProduct() {
    const [showRegisterSection, setShowRegisterSection] = useState<boolean>(false)
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()

    const show = () => { setShowRegisterSection(!showRegisterSection) }
    const onSubmit = async (data: ProductArray) => {
        let price = data.price
        price = "R$ " + data.price.replace(/\./g, ',')

        const request = {
            title: data.description,
            description: data.title,
            price: price,
            image: data.image
        }
        return dispatch(newProductRequest(request))
    }

    return (
        <>
            {!showRegisterSection
                ?
                <div>
                    <BtnRegister onClick={show} h="15" color="darkblue" />
                </div>
                :
                <div>
                    <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-labels">
                            <div>
                                <label>Título</label><br />
                                <input
                                    name="title"
                                    type="text"
                                    required
                                    placeholder="Ex: Brahma"
                                    ref={register} />
                            </div>
                            <div>
                                <label>Descrição</label><br />
                                <input
                                    name="description"
                                    type="text"
                                    placeholder="Ex: Cerveja Brahma 355ml"
                                    required
                                    ref={register} />
                            </div>
                            <div>

                                <label>Preço</label><br />
                                <input name="price"
                                    type="number"
                                    required
                                    min="0" step=".01" placeholder="R$ "
                                    ref={register} />
                            </div>
                            <div>
                                <label>Imagem</label><br />
                                <input name="image"
                                    type="text"
                                    required
                                    placeholder="Ex: http://ambev.com/2.jpg"
                                    ref={register} />
                            </div>
                        </div>
                        <div className="form-buttons">
                            <BtnCancel onClick={show} h="15" color="darkred" />
                            <BtnSave h="15" color="darkgreen" />
                        </div>
                    </form>
                </div >}
        </ >
    )
}