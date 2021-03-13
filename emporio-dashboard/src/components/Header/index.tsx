import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../../stores/ducks/user/actions"

export default function Header() {
    const { role, email, name } = useSelector((action: any) => action.userReducer)
    const dispatch = useDispatch()
    return (
        <>
            {name !== undefined &&
                <div>
                    <div>
                        Olá, {name} ({email}) <span>{role}</span>
                    </div>
                    <div>
                        <button onClick={() => dispatch(logoutUser())}>Sair</button>
                    </div>
                </div>
            }
        </>
    )
}