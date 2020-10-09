import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="header-left">
          <div className="heading">
            <span>Take Charge</span> <br/>
            Of Your Health!
          </div>
          <p className="subheading">A one-stop shop for your health needs, Online!</p>

          <div className="btn-reverse">Get Started</div>
        </div>
        <div className="header-right"></div>
      </header>
    );
  }
}
