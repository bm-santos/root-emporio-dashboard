import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { getInfoRequest, postLoginRequest } from "../../stores/ducks/user/actions"

export default function LoginPage() {

    const inputLogin = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const [getUser, setGetUser] = useState<boolean>(false)
    const { userID, role, isLogged } = useSelector((state: any) => state.userReducer)

    const login = () => {
        const requisicao = {
            email: inputLogin?.current?.value,
            password: inputPassword?.current?.value
        }
        setGetUser(true)
        return dispatch(postLoginRequest(requisicao))
    };

    return (
        <>
            <p>Login</p>
            <input
                type="email"
                aria-label="email"
                placeholder="Digite seu e-mail"
                ref={inputLogin} />
            <input
                type="password"
                aria-label="password"
                placeholder="Digite sua senha"
                ref={inputPassword} />
            <button onClick={login} >Send</button>
            {isLogged && <Redirect to="/" exact />}
        </>
    )
}