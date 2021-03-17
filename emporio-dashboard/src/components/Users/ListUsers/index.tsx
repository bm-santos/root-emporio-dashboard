import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import { deleteUserRequest } from "../../../stores/ducks/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { BinIcon } from "../../Images/Icons";
import { useState } from "react";

export default function ListUsers() {
    const { internalUsers } = useSelector((state: any) => state.userReducer)
    const [confirmExclusion, setConfirmExclusion] = useState<boolean>(false)
    const [idAtual, setIdAtual] = useState<number>(0)
    const dispatch = useDispatch()

    const deleteItem = () => {
        setConfirmExclusion(false)
        return dispatch(deleteUserRequest(idAtual))
    }

    const show = (user: any) => {
        setIdAtual(user);
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
                                    <button onClick={() => show(user.id)} >
                                        <BinIcon color="#ff0000" />
                                    </button>

                                </div>
                            </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody >
            </Table >
        </>
    )
}