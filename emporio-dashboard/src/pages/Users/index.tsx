import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Content from "../../components/Content";
import ListUsers from "../../components/Users/ListUsers";
import NewUser from "../../components/Users/NewUser";
import { Helmet } from "react-helmet"

export default function UsersPage() {
    const { isAdmin, internalUsers } = useSelector((state: any) => state.userReducer)

    return (
        <>
            <Helmet>
                <title>Usuários - Dashboard Empório da Cerveja</title>
            </Helmet>
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