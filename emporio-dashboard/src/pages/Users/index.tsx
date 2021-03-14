import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Content from "../../components/Content";
import ListUsers from "../../components/Users/ListUsers";
import NewUser from "../../components/Users/NewUser";

export default function UsersPage() {
    const { isAdmin, internalUsers } = useSelector((state: any) => state.userReducer)

    return (
        <div style={{ maxWidth: "95%", margin: "0 auto" }}>
            {!isAdmin
                ? <Redirect to={"/"} exact />
                : <Content>
                    <p style={{ marginLeft: "20px" }}>
                        <strong>Usuários registrados</strong>: {internalUsers.length}</p>
                    <NewUser />
                    <ListUsers />
                </Content>
            }
        </div>
    )
}