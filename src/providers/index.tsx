import { NodeProps } from "../globalTypes";
import { AuthenticationProvider } from "./Authentication";

const Providers = ({ children }: NodeProps): JSX.Element => {
  return <AuthenticationProvider>{children}</AuthenticationProvider>;
};

export default Providers;
