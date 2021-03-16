import { Route, Switch } from "react-router"
import ProductsPage from "./pages/Products"
import LoginPage from "./pages/Login"
import UsersPage from "./pages/Users"
import HomePage from "./pages/Home"

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/products" exact component={ProductsPage} />
            <Route path="/users" exact component={UsersPage} />
            <Route path="*" exact component={LoginPage} />
        </Switch>
    )
}