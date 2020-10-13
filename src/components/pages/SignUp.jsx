import React, { Component } from 'react'
import "../../styles/signup.scss"
import FormInput from '../FormInput'
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
          <div className="signup-container">
            <div className="signup-wrapper">
              <div className="signup-left-container">
                <img
                  src="/assets/svg/Authentication white pattern.svg"
                  className="green-svg"
                  alt=""
                />
                <div className="signup-items-container">
                  <div className="signup-logo-container">
                    <div className="signup-logo-wrapper">
                      <div className="signup-logo">
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
                        <h1 className="welcome">Welcome,</h1>
                      </div>
                      <div className="text-container">
                        <p className="welcome-text">
                          Gain access to our vast database of health information
                          and experienced clientele at the comfort of your home!
                        </p>
                      </div>
                      <div>
                        <p className="or">Or</p>
                      </div>
                      <div className="signup-link-container">
                        <Link className='login-link' to='/signin'>
                          Sign In
                        </Link>
                        {/*<a href="#" className="login-link">*/}
                        {/*  Sign in*/}
                        {/*</a>*/}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="signup-right-container">
                <div className="img-icon-container">
                  {/* <img
                    src="/assets/svg/ic-close-48px.svg"
                    className="img-icon"
                    alt="img-icon"
                  /> */}
                </div>
                <div className="form-wrapper">
                  <div className="heading-primary-container">
                    <h1 className="heading-primary">Sign Up</h1>
                  </div>
                  <div className="form-container">
                    <form>
                      <FormInput
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        required
                      />
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
                      <div className="social-icon google-signup">
                        <img
                          src="/assets//svg/icons8-google.svg"
                          className="google-icon"
                          alt="google-icon"
                        />
                        <p className="social-signup-text google">
                          Sign up with Google
                        </p>
                      </div>
                      <div className="social-icon facebook-signup">
                        <div className="fb-icon-container">
                          <img
                            src="/assets/svg/facebook-f.svg"
                            className="facebook-icon"
                            alt="facebook-icon"
                          />
                        </div>
                        <p className="social-signup-text facebook">
                          Sign up with Facebook
                        </p>
                      </div>
                      <div className="signup-btn-container">
                        <button className="signup-btn">Sign up</button>
                      </div>
                    </form>
                    <div className="apply">
                      <a href="#" className="apply-link">
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
