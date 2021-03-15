import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserRequest } from "../../../stores/ducks/user/actions";
import { BinIcon } from "../../Images/Icons";

export default function ListUsers() {
    const { internalUsers } = useSelector((state: any) => state.userReducer)
    const [confirmExclusion, setConfirmExclusion] = useState<boolean>(false)

    const dispatch = useDispatch()
    return (
        <Table className="table" size="small" stickyHeader >
            <TableHead>
                <TableRow id="table-head" >
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
                        <TableCell align="center"><span className={user.role}>{user.role}</span></TableCell>
                        <TableCell align="center">
                            <div>
                                {!confirmExclusion
                                    ? <button onClick={() => setConfirmExclusion(!confirmExclusion)} ><BinIcon /></button>
                                    : <>
                                        <button id="btn-keep" onClick={() => setConfirmExclusion(!confirmExclusion)}> Não </button>
                                        <button id="btn-delete" onClick={() => dispatch(deleteUserRequest(user.id))} >Sim</button>
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