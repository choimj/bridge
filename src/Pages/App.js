import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import IntroContainer from "../Containers/IntroContainer";
import BridgeContainer from "../Containers/BridgeContainer";
import NotFindPage from "../Pages/Error/NotFindPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IntroContainer} />
        <Route exact path="/Bridge" component={BridgeContainer} />
        <Route component={NotFindPage} />
      </Switch>
    </Router>
  );
};

export default App;
