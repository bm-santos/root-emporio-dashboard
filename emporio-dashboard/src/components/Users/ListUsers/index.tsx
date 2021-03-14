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
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="center"><strong>Nome</strong></TableCell>
                    <TableCell align="center"><strong>E-mail</strong></TableCell>
                    <TableCell align="center"><strong>Permissão</strong></TableCell>
                    <TableCell align="center"><strong>Excluir</strong></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {internalUsers !== null && internalUsers?.slice(0).reverse().map((user: any) => (
                    <TableRow key={user.id}>
                        <TableCell align="center">{user.name}</TableCell>
                        <TableCell align="center">{user.email}</TableCell>
                        <TableCell align="center">{user.role}</TableCell>
                        <TableCell align="center">
                            <span onClick={() => setConfirmExclusion(!confirmExclusion)}>
                                {!confirmExclusion
                                    ? <span onClick={() => setConfirmExclusion(!confirmExclusion)} ><BinIcon /></span>
                                    : <>
                                        <span onClick={() => dispatch(deleteUserRequest(user.id))}><strong>Sim</strong> </span>
                                        <span onClick={() => setConfirmExclusion(!confirmExclusion)}> Não </span>
                                    </>
                                }</span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}