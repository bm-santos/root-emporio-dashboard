import { CancelIcon, EnterIcon, RegisterIcon, SaveIcon } from "../Images/Icons"

export interface ButtonProps {
    h: string,
    color: string,
    onClick?: any
}

export function BtnLogin(props: ButtonProps) {
    const h = props.h
    const color = props.color
    return (
        <button
            className="btn-login"
            type="submit">
            <span>Entrar</span>
            <span><EnterIcon h={h} color={color} /></span>
        </button>
    )
}

export function BtnRegister(props: ButtonProps) {
    const h = props.h
    const color = props.color
    return (
        <button
            className="btn-register"
            onClick={props.onClick} >
            <span><RegisterIcon h={h} color={color} />
             Cadastrar</span>
        </button>
    )
}

export function BtnCancel(props: ButtonProps) {
    const h = props.h
    const color = props.color
    return (
        <button
            className="btn-cancel"
            onClick={props.onClick}  >
            <span><CancelIcon h={h} color={color} />
            Cancelar</span>
        </button>
    )
}

export function BtnSave(props: ButtonProps) {
    const h = props.h
    const color = props.color
    return (
        <button className="btn-save"
            onClick={props.onClick}
            type="submit">
            <span>Salvar
            <SaveIcon h={h} color={color} />
            </span>
        </button>
    )
}

