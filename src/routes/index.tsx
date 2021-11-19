import { Switch } from "react-router-dom";
import Route from "./route";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile"
import Chat from "../pages/Chat"
import Cart from "../pages/Cart"
import Voucher from "../pages/Voucher"
import Marketplace from "../pages/Marketplace";

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
        <Voucher />
      </Route>
    </Switch>
  );
};

export default Routes;
