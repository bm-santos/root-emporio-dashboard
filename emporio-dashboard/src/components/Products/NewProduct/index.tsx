import { useState } from "react"
import { useDispatch } from "react-redux"
import { newProductRequest } from "../../../stores/ducks/product/actions"
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form"
import { ProductArray } from "../../../stores/ducks/product/types";


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
        toast.success('Novo produto cadastrado com sucesso')
        return dispatch(newProductRequest(request))
    }

    return (
        <div>
            {!showRegisterSection
                ?
                <div>
                    <button id="btn-register" onClick={show}>
                        <span>Cadastrar</span>
                    </button>
                </div>
                :
                <div className="form-products">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Título <input
                            name="title"
                            type="text"
                            required
                            ref={register} /></label> <br />
                        <label>Descrição<input
                            name="description"
                            type="text"
                            required
                            ref={register} /> </label> <br />
                        <label>Preço <input name="price"
                            type="number"
                            required
                            min="0" step=".01" placeholder="R$ "
                            ref={register} /> </label> <br />
                        <label>Link da foto do produto <input name="image"
                            type="text"
                            required
                            ref={register} /> </label>  <br />
                        <button id="btn-cancel" onClick={show}>Cancelar</button>
                        <button id="btn-confirm" type="submit">Salvar</button>
                    </form>
                </div>}
        </div >
    )
}