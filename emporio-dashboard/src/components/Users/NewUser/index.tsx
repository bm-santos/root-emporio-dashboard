import { newUserRequest } from "../../../stores/ducks/user/actions";
import { UserArray } from "../../../stores/ducks/user/types";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form"
import { useState } from "react";

export default function NewUser() {
    const [showRegisterSection, setShowRegisterSection] = useState<boolean>(false)
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()

    const show = () => {
        setShowRegisterSection(!showRegisterSection)
    }

    const onSubmit = async (data: UserArray) => {
        const request = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role
        }
        return dispatch(newUserRequest(request))
    }
    return (
        <>
            {!showRegisterSection
                ?
                <div>
                    <button className="btn-register" onClick={show}>
                        <span>Cadastrar</span>
                    </button>
                </div>
                :
                <div>
                    <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-labels">
                            <div>
                                <label>Nome <input
                                    name="name"
                                    type="text"
                                    required
                                    ref={register} /></label>
                            </div>
                            <div>
                                <label>E-mail<input
                                    name="email"
                                    type="email"
                                    required
                                    ref={register} /> </label>
                            </div>
                            <div>
                                <label>Senha<input
                                    name="password"
                                    type="password"
                                    required
                                    pattern="[a-z0-9]{5,9}"
                                    title="Sua senha deve conter no mínimo 5 caracteres"
                                    placeholder="Digite sua senha"
                                    ref={register} /> </label>
                            </div>
                            <div>
                                <label><strong>Permissão:</strong></label><br />
                                <label className="radio-option"><input
                                    type="radio"
                                    name="role"
                                    value="admin"
                                    ref={register} /> Administrador </label><br />
                                <label className="radio-option"><input
                                    type="radio"
                                    name="role"
                                    value="editor"
                                    checked
                                    ref={register} /> Editor</label>
                            </div>
                        </div>
                        <div className="form-buttons">
                            <button className="btn-cancel" onClick={show}>Cancelar</button>
                            <button className="btn-save" type="submit">Salvar</button>
                        </div>
                    </form>
                </div>}
        </>
    )
}