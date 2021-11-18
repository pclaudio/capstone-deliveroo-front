import { NodeProps } from "../globalTypes";
import { StepProvider } from "./Step";
import { FetchProvider } from "./Fetch";
import { LocalStorageProvider } from "./LocalStorage";
import { TokenProvider } from "./Token";
import { UserProvider } from "./User";
import { AuthenticationProvider } from "./Authentication";
import { SignUpProvider } from "./SignUp";
import { ListProvider } from "./ListMarket";
import { DetailsProvider } from "./DetailsProvider";
import { CartProvider } from "./CartProvider";
import { AvailableProvider } from "./AvailableProvider";
import { PerfilProvider } from "./PerfilProvider";

const Providers = ({ children }: NodeProps): JSX.Element => {
  return (
    <StepProvider>
      <FetchProvider>
        <LocalStorageProvider>
          <TokenProvider>
            <UserProvider>
              <AuthenticationProvider>
                <SignUpProvider>
                  <DetailsProvider>
                    <CartProvider>
                      <AvailableProvider>
                        <PerfilProvider>
                          <ListProvider>{children}</ListProvider>
                        </PerfilProvider>
                      </AvailableProvider>
                    </CartProvider>
                  </DetailsProvider>
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
