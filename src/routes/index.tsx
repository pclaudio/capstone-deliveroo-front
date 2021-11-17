import { Switch } from "react-router-dom";
import Route from "./route";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Home1 from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import Marketplace from "../pages/Marketplace";
import OurTeam from "../pages/OurTeam";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/landingpage">
        <Home1 />
      </Route>

      <Route path="/ourteam">
        <OurTeam />
      </Route>
      
      <Route path="/signup">
        <SignUp />
      </Route>

      <Route path="/marketplace" isPrivate>
        <Marketplace />
      </Route>
    </Switch>
  );
};

export default Routes;
