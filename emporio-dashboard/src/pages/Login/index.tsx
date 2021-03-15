import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { LogoShield, LogoTextBox } from "../../components/Images/Logo"
import { postLoginRequest } from "../../stores/ducks/user/actions"
import { Helmet } from "react-helmet"
import { useForm } from "react-hook-form"
import { UserLogin } from "../../stores/ducks/user/types"
import './styles.css'

export default function LoginPage() {
    const { isLogged } = useSelector((state: any) => state.userReducer)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: UserLogin) => {
        const request = {
            email: data.email,
            password: data.password
        }
        return dispatch(postLoginRequest(request))
    }

    return (
        <div className="bg">
            <Helmet>
                <title>Login - Dashboard Empório da Cerveja</title>
            </Helmet>
            {isLogged && <Redirect to="/" exact />}
            <div className="container-login" >
                <div id="header-login">
                    <span><LogoShield h="100" /><LogoTextBox h="100" /></span>
                    <hr />
                </div>
                <h2>Acesso restrito | Ambev</h2>
                <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-labels">
                        <div>
                            <label>E-mail</label>
                        </div>
                        <div>
                            <input
                                name="email"
                                type="email"
                                required
                                ref={register} />
                        </div>
                        <div>
                            <label>Senha</label>
                        </div>
                        <div><input
                            name="password"
                            type="password"
                            required
                            pattern="[a-z0-9]{5,9}"
                            title="Sua senha deve conter no mínimo 5 caracteres"
                            ref={register} />
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button id="btn-confirm" type="submit">Entrar</button>
                    </div>
                </form>
            </div >
        </div>
    )
}