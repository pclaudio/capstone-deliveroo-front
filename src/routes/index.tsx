import { Switch } from "react-router-dom";
import Route from "./route";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import OurTeam from "../pages/OurTeam";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Chat from "../pages/Chat";
import Cart from "../pages/Cart";
import Marketplace from "../pages/Marketplace";
import { VoucherPage } from "../pages/Voucher";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/landingpage">
        <LandingPage />
      </Route>

      <Route path="/ourteam">
        <OurTeam />
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

      <Route path="/profile" isPrivate>
        <Profile />
      </Route>

      <Route path="/chat" isPrivate>
        <Chat />
      </Route>

      <Route path="/cart" isPrivate>
        <Cart />
      </Route>

      <Route path="/voucher" isPrivate>
        <VoucherPage />
      </Route>
    </Switch>
  );
};

export default Routes;
