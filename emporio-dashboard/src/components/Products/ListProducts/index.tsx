import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import { deleteProductRequest } from "../../../stores/ducks/product/actions"
import { useDispatch, useSelector } from "react-redux"
import { BinIcon } from "../../Images/Icons"
import { useState } from "react"

export const ListProducts = () => {
    const { isLogged, isAdmin } = useSelector((state: any) => state.userReducer)
    const { productList } = useSelector((state: any) => state.productReducer)
    const [confirmExclusion, setConfirmExclusion] = useState<boolean>(false)
    const [idAtual, setIdAtual] = useState<number>(0)
    const dispatch = useDispatch()

    const deleteItem = () => {
        setConfirmExclusion(false)
        return dispatch(deleteProductRequest(idAtual))
    }
    const show = (beer: any) => {
        setIdAtual(beer);
        setConfirmExclusion(true)
    }

    return (
        <>
            {confirmExclusion &&
                (
                    <div className="confirm-delete-div">
                        <span>
                            <p>Confirmar exclusão?</p>
                            <button className="btn-keep" onClick={() => setConfirmExclusion(false)}> Voltar </button>
                            <button className="btn-delete" onClick={deleteItem}>Deletar</button>
                        </span>
                    </div>
                )
            }
            <Table className="table" size="small" stickyHeader >
                <TableHead >
                    <TableRow className="table-head" >
                        <TableCell align="center"><span>Foto do produto</span></TableCell>
                        <TableCell align="center"><span>Título</span></TableCell>
                        <TableCell align="center"><span>Descrição</span></TableCell>
                        <TableCell align="center"><span>Preço</span></TableCell>
                        {isAdmin &&
                            <TableCell hidden align="center"><span>Excluir</span></TableCell>
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {isLogged && productList?.slice(0).reverse().map((beer: any) => (
                        <TableRow key={beer.id}>
                            <TableCell align="center">
                                <img style={{ maxHeight: "50px" }} src={beer.image} alt={beer.description} />
                            </TableCell>
                            <TableCell align="center">{beer.description}</TableCell>
                            <TableCell align="center">{beer.title}</TableCell>
                            <TableCell align="center">{beer.price}</TableCell>
                            {isAdmin &&
                                <TableCell align="center">
                                    <div>
                                        <button onClick={() => show(beer.id)} >
                                            <BinIcon color="#ff0000" />
                                        </button>
                                    </div>
                                </TableCell>
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table >
        </>
    )
}
export default ListProducts