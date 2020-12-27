import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StorageProvider } from "context/Storage";
import Home from "components/Home";
import Game from "components/Game";
import "App.css";

function App() {
  return (
    <StorageProvider>
      <Router>
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
      </Router>
    </StorageProvider>
  );
}

export default App;
