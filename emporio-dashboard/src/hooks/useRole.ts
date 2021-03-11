import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import useLogged from "./useLogged"

export const useAdmin = () => {
    const role = useSelector((state: any) => state.userReducer)
    const [isAdmin, setAdmin] = useState<boolean>(false)
    const isLogged = useLogged()

    useEffect(() => {
        if (isLogged) {
            if (role === "admin") {
                setAdmin(true)
            } else {
                setAdmin(true)
            }
        }
    }, [])
    return isAdmin
}

export const useEditor = () => {
    const role = useSelector((state: any) => state.userReducer)
    const [isEditor, setEditor] = useState<boolean>(false)
    const isLogged = useLogged()

    useEffect(() => {
        isLogged &&
            role === "editor"
            ? setEditor(true)
            : setEditor(false)
    }, [])
    return isEditor
}
