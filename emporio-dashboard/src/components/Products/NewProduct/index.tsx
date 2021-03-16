import { newProductRequest } from "../../../stores/ducks/product/actions"
import { ProductArray } from "../../../stores/ducks/product/types";
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { useState } from "react"


export default function NewProduct() {
    const [showRegisterSection, setShowRegisterSection] = useState<boolean>(false)
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()

    const show = () => { setShowRegisterSection(!showRegisterSection) }
    const onSubmit = async (data: ProductArray) => {
        let price = data.price
        price = "R$ " + data.price.replace(/\./g, ',')

        const request = {
            title: data.title,
            description: data.description,
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
                    <button className="btn-register" onClick={show}>
                        <span>Cadastrar</span>
                    </button>
                </div>
                :
                <div>
                    <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-labels">
                            <div>
                                <label>Título</label>
                                <input
                                    name="title"
                                    type="text"
                                    required
                                    placeholder="Ex: Brahma"
                                    ref={register} />
                            </div>
                            <div>
                                <label>Descrição</label>
                                <input
                                    name="description"
                                    type="text"
                                    placeholder="Ex: Cerveja Brahma 355ml"
                                    required
                                    ref={register} />
                            </div>
                            <div>

                                <label>Preço</label>
                                <input name="price"
                                    type="number"
                                    required
                                    min="0" step=".01" placeholder="R$ "
                                    ref={register} />
                            </div>
                            <div>
                                <label>Imagem</label>
                                <input name="image"
                                    type="text"
                                    required
                                    placeholder="Link da imagem"
                                    ref={register} />
                            </div>
                        </div>
                        <div className="form-buttons">
                            <button className="btn-cancel" onClick={show}>Cancelar</button>
                            <button className="btn-save" type="submit">Salvar</button>
                        </div>
                    </form>
                </div >}
        </ >
    )
}