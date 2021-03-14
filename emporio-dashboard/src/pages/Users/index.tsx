import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Content from "../../components/Content";
import ListUsers from "../../components/Users/ListUsers";
import NewUser from "../../components/Users/NewUser";

export default function UsersPage() {
    const { isAdmin, internalUsers } = useSelector((state: any) => state.userReducer)

    return (
        <>
            {!isAdmin
                ? <Redirect to={"/"} exact />
                : <Content>
                    <h2>
                        Usuários cadastrados: {internalUsers.length}
                    </h2>
                    <NewUser />
                    <ListUsers />
                </Content>
            }
        </>
    )
}