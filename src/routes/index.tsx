import { Switch } from "react-router-dom";
import Route from "./route";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Marketplace from "../pages/Marketplace";
import { Teste } from "../pages/teste";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/marketplace" isPrivate>
        <Marketplace />
      </Route>
      <Route path="/teste" isPrivate>
        <Teste />
      </Route>
    </Switch>
  );
};

export default Routes;
