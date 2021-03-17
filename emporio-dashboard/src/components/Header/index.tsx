import { logoutUser } from "../../stores/ducks/user/actions"
import { LogoShield, LogoTextBox } from "../Images/Logos"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router';
import { useState } from 'react';

export default function Header() {
    const { role, name } = useSelector((action: any) => action.userReducer)
    const [goHome, setGoHome] = useState(false);
    const dispatch = useDispatch()

    return (
        <>
            {name !== undefined &&
                <>
                    {goHome && <Redirect to="/" exact />}
                    <div className="logo" onClick={() => setGoHome(true)}>
                        <span><LogoShield color="black" h="55" /><LogoTextBox h="55" /></span>
                    </div>
                    <div className="user">
                        Olá, <span><strong>{name}</strong></span> <span id={role}>{role}</span>
                    </div>
                    <div className="logout">
                        <button onClick={() => dispatch(logoutUser())}><span>Sair</span></button>
                    </div>
                </>}
        </>
    )
}