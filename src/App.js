import { Switch, Route } from "react-router-dom";
import { StorageProvider } from "context/Storage";
import Home from "components/Home";
import Game from "components/Game";
import "App.css";

function App() {
  return (
    <StorageProvider>
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
    </StorageProvider>
  );
}

export default App;
