import { NodeProps } from "../globalTypes";
import { AuthenticationProvider } from "./Authentication";
import { LocateCepProvider } from "./cepProvider";
import { UserProvider } from "./SignUpProvider";

const Providers = ({ children }: NodeProps): JSX.Element => {
  return (
    <AuthenticationProvider>
      <UserProvider>
        <LocateCepProvider>{children}</LocateCepProvider>
      </UserProvider>
    </AuthenticationProvider>
  );
};

export default Providers;
