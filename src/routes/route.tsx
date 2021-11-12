import { Redirect, Route as ReactRoute } from "react-router-dom";
import { useAuthentication } from "../providers/Authentication";
import { CustomRouteProps } from "./types";

const Route = ({
  isPrivate = false,
  children,
  ...rest
}: CustomRouteProps): JSX.Element => {
  const { getIsAuthenticated } = useAuthentication();

  const isAuthenticated = getIsAuthenticated();

  const handleRender = () => {
    if (isAuthenticated && !isPrivate) {
      return <Redirect to={"/marketplace"} />;
    } else if (!isAuthenticated && isPrivate) {
      return <Redirect to={"/login"} />;
    } else {
      return children;
    }
  };

  return <ReactRoute {...rest} render={handleRender} />;
};

export default Route;
