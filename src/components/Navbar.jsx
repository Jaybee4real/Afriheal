import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar-container">
          <div className="logo-container">
            <div className="logo"></div>
            {/* <div className="logo-text">HealthStack</div> */}
          </div>
          <div className="links-container left">
            <a href="#." className="link active">
              Home
            </a>
            <a href="#." className="link">
              Forums
            </a>
            <a href="#." className="link">
              Discussions
            </a>
          </div>
          <div className="links-container right">
            <a href="#." className="link btn">
              Sign In
            </a>
            <a href="#." className="link btn-reverse">
              Sign Up
            </a>
          </div>
        </div>
        <div className="mobile-nav-toggle"></div>
        <div className="mobile-nav">
          <div className="logo"></div>
          <a href="#." className="mobile-nav-item active">
            Home
          </a>
          <a href="#." className="mobile-nav-item">
            Blog
          </a>
          <a href="#." className="mobile-nav-item">
            Forums
          </a>
          <a href="#." className="mobile-nav-item">
            Discusisons
          </a>
          <a href="#." className="mobile-nav-item">
            Sign Up
          </a>
          <a href="#." className="mobile-nav-item">
            Contact Us
          </a>
        </div>
      </>
    );
  }
}

(function () {
  document.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar-container");
    var navToggle = document.querySelector(".mobile-nav-toggle");
    var offset = window.pageYOffset;
    if (offset > 1) {
      navbar.classList.add("scroll");
      navToggle.classList.add("scroll");
    } else {
      navbar.classList.remove("scroll");
      navToggle.classList.remove("scroll");
    }
  });
})();
