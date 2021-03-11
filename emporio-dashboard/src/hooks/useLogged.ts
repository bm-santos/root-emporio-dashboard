import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const useLogged = () => {
    const [isLogged, setLogged] = useState<boolean>(false)
    const token = localStorage.getItem('token');
    const { isUserLogged } = useSelector((state: any) => state.userReducer)

    useEffect(() => {

        token !== null
            ? setLogged(true)
            : setLogged(false)

    }, []);

    return isLogged
}

export default useLogged