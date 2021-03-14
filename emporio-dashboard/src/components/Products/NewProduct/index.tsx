import { Button, TextField } from "@material-ui/core"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useFormStyles } from "../../../hooks/useFormStyles"
import { newProductRequest } from "../../../stores/ducks/product/actions"


export default function NewProduct() {
    const [showSection, showRegisterSection] = useState<boolean>(false)
    const inputTitle = useRef<HTMLInputElement>(null)
    const inputPrice = useRef<HTMLInputElement>(null)
    const inputDescription = useRef<HTMLInputElement>(null)
    const inputImage = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    const classes = useFormStyles()

    const show = () => {
        showRegisterSection(!showSection)
    }
    const newProduct = () => {
        const request = {
            title: inputDescription.current?.value,
            description: inputTitle.current?.value,
            price: inputPrice.current?.value,
            image: inputImage.current?.value
        }
        return dispatch(newProductRequest(request))
    }
    return (
        <div>
            {showSection
                ?
                <div className={classes.form}>
                    <div>
                        <TextField
                            aria-label="Title"
                            placeholder="Título"
                            type="text"
                            inputRef={inputTitle} />
                        <TextField
                            aria-label="Price"
                            placeholder="Preço"
                            type="number"
                            lang="pt"
                            inputRef={inputPrice}
                            defaultValue="R$ " />
                        <TextField
                            aria-label="Description"
                            placeholder="Descrição"
                            type="text"
                            inputRef={inputDescription} />
                        <TextField
                            aria-label="Thumbnail"
                            placeholder="Link da miniatura"
                            type="text"
                            inputRef={inputImage} />
                    </div>
                    <div>
                        <Button className={classes.button}
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={newProduct} >Salvar
                            </Button>
                        <Button className={classes.button}
                            size="small"
                            variant="contained"
                            onClick={show} > Cancelar
                            </Button>
                    </div>
                </div>
                :
                <div>
                    <Button className={classes.button}
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={show}>
                        <span>Cadastrar</span>
                    </Button>
                </div>
            }
        </div >
    )
}