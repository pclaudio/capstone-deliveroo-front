import Register from "./components/Register";
import GetAddress from "./components/RegisterAddress";
import RegisterProfile from "./components/RegisterProfile";

const App = () => {
  return (
    <>
      <Register />
      <hr />
      <RegisterProfile />
      <hr />
      <GetAddress />
    </>
  );
};

export default App;
