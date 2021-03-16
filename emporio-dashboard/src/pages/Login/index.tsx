import { Helmet } from "react-helmet"
import { Redirect } from "react-router"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { UserLogin } from "../../stores/ducks/user/types"
import { postLoginRequest } from "../../stores/ducks/user/actions"
import { LogoShield, LogoTextBox } from "../../components/Images/Logo"

export default function LoginPage() {
    const { isLogged } = useSelector((state: any) => state.userReducer)
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()

    const onSubmit = async (data: UserLogin) => {
        const request = {
            email: data.email,
            password: data.password
        }
        return dispatch(postLoginRequest(request))
    }

    return (
        <div className="bg">
            {isLogged && <Redirect to="/" exact />}
            <Helmet>
                <title>Login - Dashboard Empório da Cerveja</title>
            </Helmet>
            <div className="container-login" >
                <div className="header-login-form">
                    <span><LogoShield h="100" /><LogoTextBox h="100" /></span>
                    <hr />
                </div>
                <h2>Acesso restrito | Ambev</h2>
                <form className="body-login-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-inputs">
                        <div>
                            <label>E-mail</label></div>
                        <div>
                            <input
                                name="email"
                                type="email"
                                required
                                ref={register} /></div>
                        <div>
                            <label>Senha</label></div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                required
                                pattern="[a-z0-9]{5,9}"
                                title="Sua senha deve conter no mínimo 5 caracteres"
                                ref={register} /></div>
                    </div>
                    <div className="form-button">
                        <button className="btn-confirm" type="submit">Entrar</button>
                    </div>
                </form>
            </div >
        </div>
    )
}