import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Driver from "./components/Driver";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/driver" component={Driver}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
