import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './components/pages/LandingPage'
import SignUp from './components/pages/SignUp'
import SignIn from "./components/pages/SignIn";
import "./index.scss";
import Dashboard from './components/pages/Dashboard';
import HealthOfficialSignIn from './components/pages/HealthOfficialSignIn';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup/health-official" component={HealthOfficialSignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}



export default App;
