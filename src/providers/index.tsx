import { NodeProps } from "../globalTypes";
import { StepProvider } from "./Step";
import { FetchProvider } from "./Fetch";
import { LocalStorageProvider } from "./LocalStorage";
import { TokenProvider } from "./Token";
import { UserProvider } from "./User";
import { AuthenticationProvider } from "./Authentication";
import { SignUpProvider } from "./SignUp";
import { ListProvider } from "./ListMarket";

const Providers = ({ children }: NodeProps): JSX.Element => {
  return (
    <StepProvider>
      <FetchProvider>
        <LocalStorageProvider>
          <TokenProvider>
            <UserProvider>
              <AuthenticationProvider>
                <SignUpProvider>
                  <ListProvider>{children}</ListProvider>
                </SignUpProvider>
              </AuthenticationProvider>
            </UserProvider>
          </TokenProvider>
        </LocalStorageProvider>
      </FetchProvider>
    </StepProvider>
  );
};

export default Providers;
