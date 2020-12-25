import { Switch, Route } from "react-router-dom";
import Home from "components/Home";
import Game from "components/Game";
import "App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/game/:id">
        <Game />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
    </Switch>
  );
}

export default App;
