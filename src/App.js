import logo from "./logo.svg";
import { Button } from "antd";
import "./App.css";
import { useHistory, useLocation } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  let history = useHistory();
  let location = useLocation();

  function go(to) {
    history.push(to);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Button
        type={location.pathname === "/" ? "primary" : "ghost"}
        shape="round"
        onClick={() => go("/")}
      >
        Home
      </Button>
      <Button
        type={location.pathname === "/about" ? "primary" : "ghost"}
        shape="round"
        onClick={() => go("/about")}
      >
        About
      </Button>
      <Button
        type={location.pathname === "/dash" ? "primary" : "ghost"}
        shape="round"
        onClick={() => go("/dash")}
      >
        Dashboard
      </Button>
      <Switch>
        <Route exact path="/">
          <h2>Home</h2>
        </Route>
        <Route path="/about">
          <h2>About</h2>
        </Route>
        <Route path="/dash">
          <h2>Dashboard</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
