import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import useLogged from "../../hooks/useLogged"

export default function HomePage() {
    const { isLogged, userID, role } = useSelector((state: any) => state.userReducer)

    // userID > 0 && console.log(role)
    return (
        <>
            {role === '' && <Redirect to="/login" exact />}
            <p>Home</p>
        </>
    )
}