import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    var navbar = document.querySelector(".navbar-container");
    var navToggle = document.querySelector(".mobile-nav-toggle");
    let mobileNav = document.querySelector(".mobile-nav");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        mobileNav.classList.toggle("active");
      });
    }

    document.addEventListener("scroll", () => {
      var offset = window.pageYOffset;
      if (offset > 1) {
        navbar.classList.add("scroll");
        navToggle.classList.add("scroll");
      } else if (offset < 1) {
        navbar.classList.remove("scroll");
        navToggle.classList.remove("scroll");
      }
    });
  }, []);

  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <div className="logo"></div>
          {/* <div className="logo-text">HealthStack</div> */}
        </div>
        <div className="links-container left">
          <a href="/" className="link active">
            Home
          </a>
          <a href="/forum" className="link">
            Forums
          </a>
          <a href="/discussions" className="link">
            Discussions
          </a>
        </div>
        <div className="links-container right">
          <Link className="link btn" to="/signin">
            Sign In
          </Link>
          <Link className="link btn-reverse" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="mobile-nav-toggle invert-on-click"></div>
      <div className="mobile-nav">
        <div className="logo"></div>
        <Link to="/" className="mobile-nav-item active">
          Home
        </Link>
        <Link to="/signin" className="mobile-nav-item">
          Sign In
        </Link>
        <Link to="/signup" className="mobile-nav-item">
          Sign Up
        </Link>
        <Link to="/" className="mobile-nav-item">
          Blog
        </Link>
        <Link to="/" className="mobile-nav-item">
          Forums
        </Link>
        <Link to="/" className="mobile-nav-item">
          Discusisons
        </Link>

        <Link to="/" className="mobile-nav-item">
          Contact Us
        </Link>
      </div>
    </>
  );
}
