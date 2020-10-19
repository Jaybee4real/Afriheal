import "../../styles/signin.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { signInAccount } from "../../Redux/auth/auth.actions";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signInAccount(this.state).then(
      () => {
        this.props.history.push("/");
      },
      (err) => {
        console.error(err);
      }
    );
  }
  render() {
     const { email, password } = this.state;
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
              <form className="input-container" onSubmit={this.handleSubmit}>
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

                <button className="btn-reverse">SIGN IN</button>
              </form>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.auth.errors,
  loading: state.auth.loading,
});
const mapDispatchToProps = (dispatch) => ({
  signInAccount: (newUser, history) =>
    dispatch(signInAccount(newUser, history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))
