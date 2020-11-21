import React, { Component } from "react";

export default class DashboardSidebar extends Component {
  render() {
    return (
      <div className={`sidebar-container ${this.props.sidebarOpen? "active" : ""}`} >
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
            <i className="far fa-globe-africa"></i>
            Community
          </div>
          <div
            onClick={() => this.props.updateActiveScreen("Messages")}
            className={`sidebar-item ${
              this.props.activeScreen === "Messages" ? "active" : ""
            }`}
          >
            <i className="fad fa-comments-alt"></i>
            Messages
          </div>
          <div
            onClick={() => this.props.updateActiveScreen("Profile")}
            className={`sidebar-item ${
              this.props.activeScreen === "Profile" ? "active" : ""
            }`}
          >
            <i className="fad fa-user"></i>
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
              className="fal fa-question-circle"
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
            <i className="fad fa-user-circle"></i>
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
