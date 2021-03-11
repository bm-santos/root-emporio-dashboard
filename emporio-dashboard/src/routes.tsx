import { Route, Switch } from "react-router"
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import ProductsPage from "./pages/Products"
import UsersPage from "./pages/Users"

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