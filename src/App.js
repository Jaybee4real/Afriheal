import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import UserProtected from "./components/auth/PrivateRoute"
import LandingPage from './components/pages/LandingPage'
import SignUp from './components/pages/SignUp'
import SignIn from "./components/pages/SignIn";
import "./index.scss";
import Dashboard from './components/pages/Dashboard';
import HealthOfficialSignIn from './components/pages/HealthOfficialSignIn';
import NotFound from "./components/pages/NotFound"
import setUser from "./utils/setUser";

setUser()

function App(props) {
  return (
    <Router>
      <Switch>
        <UserProtected
          isAuthenticated={props.isAuthenticated}
          path="/dashboard"
          component={Dashboard}
        />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/user" component={Dashboard} />
        {/* <Route exact path="/user/home" component={} />
        <Route exact path="/user/appointments" component={} />
        <Route exact path="/user/community" component={} />
        <Route exact path="/user/messages" component={} />
        <Route exact path="/user/profile" component={} /> */}
        <Route exact path="/signup/health-official" component={HealthOfficialSignIn} />
        <Route
          exact
          path="/signup/health-official"
          component={HealthOfficialSignIn}
        />
        <Route component={NotFound} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(App);
