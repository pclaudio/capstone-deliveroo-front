import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./globalStyles";
import Routes from "./routes";

const App = (): JSX.Element => {
  return (
    <>
      <ToastContainer />

      <GlobalStyle />

      <Routes />
    </>
  );
}

export default App;
