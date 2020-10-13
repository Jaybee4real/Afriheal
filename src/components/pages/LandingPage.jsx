import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import "../../styles/navbar.scss";
import "../../styles/footer.scss";
import "../../styles/header.scss";
import "../../styles/main.scss";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="Landing-page">
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

