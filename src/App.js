import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Header from './components/Header';
import SignUp from './components/signup.jsx'
import "./index.scss"

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          {/* <Navbar />
          <Header /> */}
          <SignUp />
        </div>
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
