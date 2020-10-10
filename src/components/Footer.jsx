import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="divider">
          <div className="col">
            <div className="logo"></div>
            <div className="copyright">&copy; Healthstack</div>
          </div>

          <div className="col" style={{ paddingTop: '20px'  }}>
            <a className="link">About Us</a>
            <a className="link">Contact</a>
            <a className="link">Terms and conditions</a>
          </div>
        </div>
        <div className="divider">
          <div className="col-row col">
            <a>
              <i class="fab fa-facebook"></i>
              Facebook
            </a>
            <a>
              <i class="fab fa-twitter"></i>
              Twitter
            </a>
            <a>
              <i class="fab fa-instagram"></i>
              Instagram
            </a>
          </div>

          <div className="col" style={{ marginRight: 5 }}>
            <div className="text" style={{ marginLeft: 0, marginBottom: 20 }}>
              Subscribe to our newsletter
            </div>

            <div className="input-container">
              <input placeholder="Email Address" />
              <div className="btn-white">Ok</div>
            </div>
          </div>

          <div className="address col">
            <div className="text">11, Evergreen Rd, Agidingbi, Ikeja</div>
            <div className="text">+234 814 49 7066</div>
            <div className="text">heathstackafrica@gmail.com</div>
          </div>
        </div>
      </footer>
    );
  }
}
