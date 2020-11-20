import React, { Component } from "react";

export default class DashboardSidebar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="sidebar-container">
        <div className="logo"></div>
        <div className="sidebar-items-container">
          <div
            onClick={() => this.props.updateActiveScreen("Home")}
            className={`sidebar-item ${
              this.props.activeScreen === "Home" ? "active" : ""
            }`}
          >
            <i className="fal fa-home-heart"></i>
            Home
          </div>
          <div
            onClick={() => this.props.updateActiveScreen("Appointments")}
            className={`sidebar-item ${
              this.props.activeScreen === "Appointments" ? "active" : ""
            }`}
          >
            <i className="far fa-calendar-day"></i>
            Appointments
          </div>
          <div
            onClick={() => this.props.updateActiveScreen("Community")}
            className={`sidebar-item ${
              this.props.activeScreen === "Community" ? "active" : ""
            }`}
          >
            <i class="far fa-globe-africa"></i>
            Community
          </div>
          <div
            onClick={() => this.props.updateActiveScreen("Messages")}
            className={`sidebar-item ${
              this.props.activeScreen === "Messages" ? "active" : ""
            }`}
          >
            <i class="fad fa-comments-alt"></i>
            Messages
          </div>
          <div
            onClick={() => this.props.updateActiveScreen("Profile")}
            className={`sidebar-item ${
              this.props.activeScreen === "Profile" ? "active" : ""
            }`}
          >
            <i class="fad fa-user"></i>
            Profile
          </div>
        </div>
        <div className="other-items-container">
          <div
            onClick={() => this.props.updateActiveScreen("Help")}
            className={`sidebar-item ${
              this.props.activeScreen === "Help" ? "active" : ""
            }`}
          >
            <i
              class="fal fa-question-circle"
              style={{
                top: ".1rem",
              }}
            ></i>
            Help
          </div>
          <hr />
          <div
            onClick={() => this.props.updateActiveScreen("Profile")}
            className={`sidebar-item user-tab ${
              this.props.activeScreen === "Help" ? "active" : ""
            }`}
          >
            <i class="fad fa-user-circle"></i>
            <div className="subcontainer">
              <div className="name">John Doe</div>
              <div className="email">Johndoe@email.com</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
