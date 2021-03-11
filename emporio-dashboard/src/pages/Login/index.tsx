import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { getInfoRequest, postLoginRequest } from "../../stores/ducks/user/actions"

export default function LoginPage() {

    const inputLogin = useRef<HTMLInputElement>(null)
    const inputPassword = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const { userID, role } = useSelector((state: any) => state.userReducer)

    const login = () => {
        const requisicao = {
            email: inputLogin?.current?.value,
            password: inputPassword?.current?.value
        }
        return dispatch(postLoginRequest(requisicao))
    }

    useEffect(() => {
        userID > 0 && dispatch(getInfoRequest(userID))
    }, [userID])

    return (
        <>
            <p>Login</p>
            <label>Email</label>
            <input type="email" placeholder="type your e-mail" ref={inputLogin} />
            <label>Password</label>
            <input type="password" placeholder="type your password" ref={inputPassword} />
            <button onClick={login} >Send</button>

            {role !== '' && <Redirect to="/" exact />}
        </>
    )
}