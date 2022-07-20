import "./Styles/app.css";
import Menu from "./components/Menu";
import RoutesPage from "./components/RoutesPage";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";

function App() {
  const { user } = useContext(UserContext);
  if (user === false) {
    return <p>Loading</p>;
  }

  return (
    <div className="App">
      <div className="containerHeader">
        <div className="header">
          <div className="">
            <h1>Sistema APP V 1.0</h1>
          </div>
          <div className="">
            <Menu />
          </div>
        </div>
      </div>
      <div className="main">
        <RoutesPage />
      </div>
    </div>
  );
}

export default App;
