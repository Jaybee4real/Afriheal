import React, { Component } from "react";
import "../../styles/signin.scss";
import FormInput from "../FormInput";

export default class SignIn extends Component {
  render() {
    return (
      <div className="signin-container">
        <div className="signin-wrapper">
          <div className="signin-left-container">
            <img
              src="/assets/svg/Authentication white pattern.svg"
              className="green-svg"
              alt=""
            />
            <div className="signin-items-container">
              <div className="signin-logo-container">
                <div className="signin-logo-wrapper">
                  <div className="signin-logo">
                    <img
                      src="/assets/svg/Afriheal logo white.svg"
                      className="top-logo"
                      alt="top-logo"
                    />
                  </div>
                </div>
              </div>
              <div className="left-content-container">
                <div className="content-wrapper">
                  <div className="heading-container">
                    <h1 className="welcome">Welcome back,</h1>
                  </div>
                  <div className="text-container">
                    <p className="welcome-text">
                      Explore new articles from our expert doctors and get
                      reliable information from our health database.
                    </p>
                  </div>
                  <div>
                    <p className="or">Or</p>
                  </div>
                  <div className="signin-link-container">
                    <a href="#." className="login-link">
                      Sign up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="signin-right-container">
            <div className="img-icon-container">
              <img
                src="/assets/svg/ic-close-48px.svg"
                className="img-icon"
                alt="img-icon"
              />
            </div>
            <div className="form-wrapper">
              <div className="heading-primary-container">
                <h1 className="heading-primary">Sign In</h1>
              </div>
              <div className="form-container">
                <form>
                  <FormInput
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <FormInput
                    type="password"
                    name="password"
                    placeholder="Secure password"
                    required
                  />
                  <div className="or-container">
                    <p className="tiny-or">Or</p>
                  </div>
                  <div className="social-icon google-signin">
                    <img
                      src="/assets//svg/icons8-google.svg"
                      className="google-icon"
                      alt="google-icon"
                    />
                    <p className="social-signin-text google">
                      Sign up with Google
                    </p>
                  </div>
                  <div className="social-icon facebook-signin">
                    <div className="fb-icon-container">
                      <img
                        src="/assets/svg/facebook-f.svg"
                        className="facebook-icon"
                        alt="facebook-icon"
                      />
                    </div>
                    <p className="social-signin-text facebook">
                      Sign up with Facebook
                    </p>
                  </div>
                  <div className="signin-btn-container">
                    <button className="signin-btn">Sign in</button>
                  </div>
                </form>
                <div className="apply">
                  <a href="#." className="apply-link">
                    Apply as a health official
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
