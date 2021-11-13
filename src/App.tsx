import GlobalStyle from "./globalStyles";
import Login from "./pages/Login";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />

      <div className="App">
        <Login />
      </div>
    </>
  );
};

export default App;
