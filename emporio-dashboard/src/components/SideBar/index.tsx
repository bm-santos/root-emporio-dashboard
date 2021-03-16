import { HomeIcon, ProductsIcon, UserIcon } from "../Images/Icons"
import { Link, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

export default function SideBar() {
    const { isAdmin, isLogged } = useSelector((action: any) => action.userReducer)
    return (
        <>
            {!isLogged && <Redirect to="/login" exact />}
            <nav className="menu">
                <ul>
                    <Link className="link-menu" to="/">
                        <li>
                            <span><HomeIcon h="20" color="#d67900" /></span>
                            <span>Home</span>
                        </li></Link>
                </ul>
                <ul>
                    <Link className="link-menu" to="/products">
                        <li>
                            <span><ProductsIcon h="20" color="#d67900" /></span>
                            <span>Produtos</span>
                        </li></Link>
                </ul>
                <ul>
                    {
                        isAdmin && <Link className="link-menu" to="/users">
                            <li>
                                <span><UserIcon h="20" color="#d67900" /></span>
                                <span>Usuários</span>
                            </li></Link>
                    }
                </ul>
            </nav>
        </>
    )
}