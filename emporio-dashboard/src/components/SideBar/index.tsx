/* eslint-disable jsx-a11y/aria-role */
import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"

export default function SideBar() {
    const { isAdmin, isLogged } = useSelector((action: any) => action.userReducer)
    return (
        <>
            {!isLogged && <Redirect to="/login" exact />}
            <nav role="full-horizontal" className="menu">
                <ul >
                    <Link className="link-menu" to="/"><li>Home</li></Link>

                </ul>
                <ul>
                    <Link className="link-menu" to="/products"><li>Produtos</li></Link>
                </ul>
                <ul>
                    {
                        isAdmin && <Link className="link-menu" to="/users"><li>Usuários</li></Link>
                    }
                </ul>
            </nav>
        </>
    )
}