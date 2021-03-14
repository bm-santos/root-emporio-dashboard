import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { BinIcon } from "../../Images/Icons"
import { deleteProductRequest } from "../../../stores/ducks/product/actions"
import { useState } from "react"

export const ListProducts = () => {
    const { isLogged, isAdmin } = useSelector((state: any) => state.userReducer)
    const { beerList } = useSelector((state: any) => state.productReducer)
    const [confirmExclusion, setConfirmExclusion] = useState<boolean>(false)
    const dispatch = useDispatch()

    return (
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="center"><strong></strong></TableCell>
                    <TableCell align="center"><strong>Título</strong></TableCell>
                    <TableCell align="center"><strong>Descrição</strong></TableCell>
                    <TableCell align="center"><strong>Preço</strong></TableCell>
                    {isAdmin &&
                        <TableCell hidden align="center"><strong>Excluir</strong></TableCell>
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {isLogged && beerList?.slice(0).reverse().map((beer: any) => (
                    <TableRow key={beer.id}>
                        <TableCell align="center">
                            <img style={{ maxHeight: "50px" }} src={beer.image} alt={beer.description} />
                        </TableCell>
                        <TableCell align="center">{beer.description}</TableCell>
                        <TableCell align="center">{beer.title}</TableCell>
                        <TableCell align="center">{beer.price}</TableCell>
                        {isAdmin &&
                            <TableCell key={beer.id} align="center">
                                <span onClick={() => setConfirmExclusion(!confirmExclusion)}>
                                    {!confirmExclusion
                                        ? <span onClick={() => setConfirmExclusion(!confirmExclusion)} ><BinIcon /></span>
                                        : <>
                                            <span onClick={() => dispatch(deleteProductRequest(beer.id))}> <strong>Sim</strong> </span>
                                            <span onClick={() => setConfirmExclusion(!confirmExclusion)}> Não </span>
                                        </>
                                    }</span>
                            </TableCell>
                        }
                    </TableRow>
                ))}
            </TableBody>
        </Table >
    )
}
export default ListProducts