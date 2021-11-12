import {Switch, Route} from "react-router"
import Login from "../pages/Login"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
        </Switch>
    )
}

export default Routes
