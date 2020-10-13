import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import "../styles/navbar.scss";
import "../styles/footer.scss";
import "../styles/header.scss";
import "../styles/main.scss";

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

