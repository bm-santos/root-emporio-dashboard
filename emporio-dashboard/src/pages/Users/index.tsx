import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import Container from "../../components/Container";
import Content from "../../components/Content";
import { deleteUserRequest, newUserRequest } from "../../stores/ducks/user/actions"

export default function UsersPage() {
    const { isAdmin, internalUsers } = useSelector((state: any) => state.userReducer)
    const inputName = useRef<HTMLInputElement>(null)
    const inputEmail = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)
    const [showSection, setShowSection] = useState<boolean>(false)
    const [roleType, setRoleType] = useState<string>('')

    const dispatch = useDispatch()

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRoleType((event.target as HTMLInputElement).value);
    };
    const show = () => {
        setShowSection(!showSection)
    }
    const newUser = () => {
        const request = {
            name: inputName.current?.value,
            email: inputEmail.current?.value,
            password: inputPassword.current?.value,
            role: roleType
        }
        console.log(request)
        return dispatch(newUserRequest(request))
    }
    return (
        <>
            {!isAdmin
                ? <Redirect to={"/"} exact />
                : <Container>
                    <div>
                        <p onClick={show}>[+] Cadastrar usuário</p>
                        {showSection &&
                            <>
                                <input
                                    aria-label="Nome"
                                    placeholder="Nome"
                                    type="name"
                                    ref={inputName} />
                                <input
                                    aria-label="Email"
                                    placeholder="Email"
                                    type="email"
                                    ref={inputEmail} />
                                <input
                                    aria-label="Senha"
                                    placeholder="Senha"
                                    type="password"
                                    ref={inputPassword} />
                                <RadioGroup aria-label="Role" name="role" value={roleType} onChange={handleRadioChange}>
                                    <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                                    <FormControlLabel value="editor" control={<Radio />} label="Editor" />
                                </RadioGroup>
                                <button onClick={newUser} >Send</button>
                            </>}
                    </div>
                    <p>Usuários registrados: {internalUsers.length}</p>
                    <div>
                        {internalUsers !== null && internalUsers?.slice(0).reverse().map((user: any) => (
                            <div key={user.id}>
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                                <p>{user.role}</p>
                                <button onClick={() => dispatch(deleteUserRequest(user.id))}>Delete</button>
                            </div>
                        ))}
                    </div>
                </Container>
            }
        </>
    )
}