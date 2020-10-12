import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
// import Navbar from './components/Navbar';
// import Header from './components/Header';
=======
import LandingPage from './components/landing-page'
>>>>>>> 137b5b6cf66b8dfb1f90631e70ea43673a585392
import SignUp from './components/signup.jsx'
import SignIn from "./components/signin.jsx";
import "./index.scss";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </Router>
  );
}



export default App;
