import { LogoShield, LogoTextBox } from "../../components/Images/Logos"
import { postLoginRequest } from "../../stores/ducks/user/actions"
import { UserLogin } from "../../stores/ducks/user/types"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { Redirect } from "react-router"
import { Helmet } from "react-helmet"
import { BtnLogin } from "../../components/Buttons"

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
                    <span><LogoShield h="100" color="#FFA935" /><LogoTextBox h="90" /></span>
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
                                placeholder="joao@ambev.com"
                                ref={register} /></div>
                        <div>
                            <label>Senha</label></div>
                        <div>
                            <input
                                name="password"
                                type="password"
                                required
                                placeholder="Sua senha"
                                pattern="[a-z0-9]{5,9}"
                                title="Sua senha deve conter no mínimo 5 caracteres"
                                ref={register} /></div>
                    </div>
                    <div className="form-button">
                        <BtnLogin h="15" color="#9b5500" />
                    </div>
                </form>
            </div >
        </div>
    )
}