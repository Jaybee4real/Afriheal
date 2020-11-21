import React, { Component } from "react";
import "../../styles/patient-profile.scss";


export default class Profile extends Component {
  render() {
    return (
      <div className={`page ${this.props.active === true ? "slide-in" : ""}`}>
        <div className="notice">
          <a href="#editprofile" className="info">
            Personalized your article and feed. Complete your Patient Profile
            now.
          </a>
          <i className="fal fa-times"></i>
        </div>
        <div className="profile-card">
          <div className="profile-avatar">
            <img
              src="https://images.generated.photos/VKyZVOINQhI7XxHDhuEoiUOuitQliEKWXwhYa5PUsIk/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5ODIyNjMuanBn.jpg"
              alt=""
              className="profile"
            />
            <h3 className="patient-name">Yemi James</h3>
            <p className="patient-email">yemijames@gmail.com</p>
          </div>
          <div className="personal-info">
            <h2>Personal Info</h2>

            <div className="patient-info">
              <div className="firstname">
                <h3>First Name</h3>
                <p>Yemi</p>
              </div>
              <div className="lastname">
                <h3>Last Name</h3>
                <p>James</p>
              </div>
            </div>
            <div className="email-info">
              <h3>Email</h3>
              <p>yemijames@gmail.com</p>
            </div>
            <div className="age-info">
              <h3>Age</h3>
              <p>18+</p>
            </div>
          </div>
          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="mobile-info">
              <h3>Moble</h3>
              <p>+235 899 7890 990</p>
            </div>
            <div className="address-info">
              <h3>Address</h3>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div className="health-info">
            <h2>Health Info</h2>
            <div className="patient-record">
              <div className="patient-height">
                <h3>Height</h3>
                <p>Fill info</p>
              </div>
              <div className="patient-summary">
                <h3>Health Summary</h3>
                <p>Fill info</p>
              </div>
            </div>
          </div>
          <div className="edit">
            <i className="fa fa-edit"></i>
          </div>
        </div>
        <div className="payment-page">
          <div className="title">
            <i className="fad fa-money-bill-wave"></i>
            <span>Billing Info</span>
          </div>
          <div className="card-page">
            <img src="/vectors/office.svg" alt="office" />
            <p>You have no saved cards.</p>
            <a href="#addcard">Add a card, make payments easier and safer.</a>
          </div>
        </div>
      </div>
    );
  }
}

