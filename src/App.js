
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
function App() {
  return (
    <div>
  <Router>
        <Switch>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
