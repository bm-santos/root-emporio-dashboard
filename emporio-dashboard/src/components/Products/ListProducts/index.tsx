import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import { deleteProductRequest } from "../../../stores/ducks/product/actions"
import { useDispatch, useSelector } from "react-redux"
import { BinIcon } from "../../Images/Icons"
import { useState } from "react"

export const ListProducts = () => {
    const { isLogged, isAdmin } = useSelector((state: any) => state.userReducer)
    const { productList } = useSelector((state: any) => state.productReducer)
    const [confirmExclusion, setConfirmExclusion] = useState<boolean>(false)
    const dispatch = useDispatch()

    const deleteItem = (id: number) => {
        setConfirmExclusion(!confirmExclusion)
        return dispatch(deleteProductRequest(id))
    }
    return (<Table className="table" size="small" stickyHeader >
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
                                {!confirmExclusion
                                    ? <button onClick={() => setConfirmExclusion(!confirmExclusion)} ><BinIcon color="#ff0000" /></button>
                                    : <>
                                        <button className="btn-keep" onClick={() => setConfirmExclusion(!confirmExclusion)}> Não </button>
                                        <button className="btn-delete" onClick={() => deleteItem(beer.id)}>Sim</button>
                                    </>
                                }
                            </div>
                        </TableCell>
                    }
                </TableRow>
            ))}
        </TableBody>
    </Table >
    )
}
export default ListProducts