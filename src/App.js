import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SignUp from './components/signup.jsx'
import "./index.scss";
import "./styles/navbar.scss";
import "./styles/footer.scss";
import "./styles/header.scss";
import "./styles/main.scss";


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Header />
          <Main />
          <Footer />
          <SignUp />
        </div>
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
  )
}



export default App;
