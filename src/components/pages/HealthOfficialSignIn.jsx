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
              <i className="fal fa-times"></i>
            </Link>
          </div>
          <div className="left-side" style={{ backgroundColor: "#6b726f" }}>
            <div className="text">
            <div className="heading">Join Our Health Community, Widen Your Reach</div>
              <p className="or dissapear-760">Or</p>
              <br />
              <Link to="/signin" className="btn dissapear-760">
                SIGN IN
              </Link>
            </div>
          </div>
          <div className="right-side">
            <div className="content-container">
                <p>Health Offical</p>
              <div className="heading">Application</div>
              <div className="input-container">
                <input placeholder="Full Name"/>
                <input placeholder="Email" />
                <input placeholder="Secure Password" />

                <div className="btn-reverse">APPLY</div>
              </div>
              <div className="or">Or</div>

              <div className="options-container">
                <div className="option">
                  <div className="icon"></div>
                  Sign Up With Google
                </div>
                <div className="option">
                  <div className="icon"></div>
                  Sign Up With Facebook
                </div>

                <div className="text-option appear-760">
                  Already Have An Account?{" "}
                  <Link className="link" to="/signup">
                    Sign In
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
