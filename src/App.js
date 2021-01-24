import "./App.css";
import Layout from "./components/loginlayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupLay from "./components/signuplayout";
import LoginLay from "./components/loginlayout"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/" component={LoginLay} />
          <Route path="/signup" component={SignupLay} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
