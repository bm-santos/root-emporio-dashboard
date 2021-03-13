import { useSelector } from "react-redux"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"

export default function SideBar() {
    const { isAdmin, isLogged } = useSelector((action: any) => action.userReducer)

    return (
        <>
            {!isLogged && <Redirect to="/login" exact />}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                {
                    isAdmin && <Link to="/users">Manage Users</Link>
                }
            </nav>

        </>
    )
}