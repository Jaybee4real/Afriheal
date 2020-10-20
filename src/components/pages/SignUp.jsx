import "../../styles/signin.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { registerAccount } from "../../Redux/auth/auth.actions";
import { Link, withRouter } from "react-router-dom";
import { CountryDropdown  } from 'react-country-region-selector';


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      country: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.registerAccount(this.state).then(
      () => {
        this.props.history.push("/signin");
      },
      (err) => {
        console.error(err);
      }
    );
  }

  render() {
    const { firstName, lastName, email, password, country } = this.state;
    return (
      <div className="wrapper">
        <div className="container">
          <div className="top-container">
            <div className="logo"></div>
            <Link to="/" className="close-btn">
              <i className="fal fa-times"></i>
            </Link>
          </div>
          <div className="left-side">
            <div className="text">
              <div className="heading">
                Join Our Health Community, Widen Your Reach
              </div>
              <p>
                Get access to our vast database of health information and our
                very well experienced clientelle at the comfort of your home!
              </p>
              <p className="or dissapear-760">Or</p>
              <br />
              <Link to="/signin" className="btn dissapear-760">
                SIGN IN
              </Link>
            </div>
          </div>
          <div className="right-side">
            <div className="content-container">
              <div className="heading">Sign Up</div>
              <form className="input-container" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  onChange={this.handleInputChange}
                  value={firstName}
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  onChange={this.handleInputChange}
                  value={lastName}
                  placeholder="Lastt Name"
                  required
                />
                <input
                  type="text"
                  name="email"
                  onChange={this.handleInputChange}
                  value={email}
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  name="password"
                  onChange={this.handleInputChange}
                  value={password}
                  placeholder="Secure Password"
                  required
                />
                <CountryDropdown
                  value={country}
                  className="country"
                  onChange={(val) => this.selectCountry(val)}
                />

                <button className="btn-reverse">SIGN UP</button>
              </form>
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
                  <Link className="link" to="/signup/health-official">
                    Apply As A Health Official
                  </Link>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.auth.errors,
  loading: state.auth.loading,
});
const mapDispatchToProps = (dispatch) => ({
  registerAccount: (newUser, history) =>
    dispatch(registerAccount(newUser, history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
