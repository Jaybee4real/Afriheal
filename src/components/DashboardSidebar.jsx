import React, { Component } from "react";

export default class DashboardSidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="logo"></div>
        <div className="sidebar-items-container">
          <div className="sidebar-item active">
            <i className="fal fa-home-heart"></i>
            Home
          </div>
          <div className="sidebar-item">
            <i className="far fa-calendar-day"></i>
            Appointments
          </div>
          <div className="sidebar-item">
            <i class="far fa-globe-africa"></i>
            Community
          </div>
          <div className="sidebar-item">
            <i class="fad fa-comments-alt"></i>
            Messages
          </div>
          <div className="sidebar-item">
            <i class="fad fa-user"></i>
            Profile
          </div>
        </div>
        <div className="other-items-container">
          <div className="sidebar-item">
            <i class="fal fa-question-circle"></i>
            Help
          </div>
          <hr />
          <div className="sidebar-item user-tab">
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
