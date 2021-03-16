import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import { deleteUserRequest } from "../../../stores/ducks/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { BinIcon } from "../../Images/Icons";
import { useState } from "react";

export default function ListUsers() {
    const { internalUsers } = useSelector((state: any) => state.userReducer)
    const [confirmExclusion, setConfirmExclusion] = useState<boolean>(false)

    const dispatch = useDispatch()

    const deleteItem = (id: number) => {
        setConfirmExclusion(!confirmExclusion)
        return dispatch(deleteUserRequest(id))
    }

    return (
        <Table className="table" size="small" stickyHeader >
            <TableHead>
                <TableRow className="table-head" >
                    <TableCell align="center"><span>Nome</span></TableCell>
                    <TableCell align="center"><span>E-mail</span></TableCell>
                    <TableCell align="center"><span>Permissão</span></TableCell>
                    <TableCell align="center"><span>Excluir</span></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {internalUsers !== null && internalUsers?.slice(0).reverse().map((user: any) => (
                    <TableRow key={user.id}>
                        <TableCell align="center">{user.name}</TableCell>
                        <TableCell align="center">{user.email}</TableCell>
                        <TableCell align="center"><span id={user.role}>{user.role}</span></TableCell>
                        <TableCell align="center">
                            <div>
                                {!confirmExclusion
                                    ? <button onClick={() => setConfirmExclusion(!confirmExclusion)} ><BinIcon color="#ff0000" /></button>
                                    : <>
                                        <button className="btn-keep" onClick={() => setConfirmExclusion(!confirmExclusion)}> Não </button>
                                        <button className="btn-delete" onClick={() => deleteItem(user.id)} >Sim</button>
                                    </>
                                }
                            </div>
                        </TableCell>
                    </TableRow>
                ))
                }
            </TableBody >
        </Table >
    )
}