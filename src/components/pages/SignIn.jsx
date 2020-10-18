import "../../styles/signin.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signin extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="top-container">
            <div className="logo"></div>
            <Link to="/" className="close-btn">
              <i class="fal fa-times"></i>
            </Link>
          </div>
          <div className="left-side">
            <div className="text">
              <div className="heading">Welcome Back!</div>
              <p>
                Explore new articles from our expert doctors and get reliable
                information from our health database
              </p>
              <p className="or dissapear-760">Or</p>
              <br />
              <Link to="/signup" className="btn dissapear-760">
                SIGN UP
              </Link>
            </div>
          </div>
          <div className="right-side">
            <div className="content-container">
              <div className="heading">Sign In</div>
              <div className="input-container">
                <input placeholder="Email" />
                <input placeholder="Secure Password" />

                <div className="btn-reverse">SIGN IN</div>
              </div>
              <div className="or">Or</div>

              <div className="options-container">
                <div className="option">
                  <div className="icon"></div>
                  Sign In With Google
                </div>
                <div className="option">
                  <div className="icon"></div>
                  Sign In With Facebook
                </div>

                <div className="text-option appear-760">
                  Dont Have An Account?
                  <Link className="link" to="/signup">
                    Create One
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
