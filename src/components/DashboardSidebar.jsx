import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DashboardSidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="logo"></div>
        <div className="sidebar-items-container">
          <Link className="sidebar-item active">
            <i className="fal fa-home-heart"></i>
            Home
          </Link>
          <Link className="sidebar-item ">
            <i className="far fa-calendar-day"></i>
            Appointments
          </Link>
          <Link className="sidebar-item ">
            <i class="far fa-globe-africa"></i>
            Community
          </Link>
          <Link className="sidebar-item ">
            <i class="fad fa-comments-alt"></i>
            Messages
          </Link>
          <Link className="sidebar-item ">
            <i class="fad fa-user"></i>
            Profile
          </Link>
        </div>
        <div className="other-items-container">
          <Link className="sidebar-item ">
            <i class="fal fa-question-circle"></i>
            Help
          </Link>
          <hr />
          <Link className="sidebar-item user-tab">
            <i class="fad fa-user-circle"></i>
            <Link className="subcontainer">
              <div className="name">John Doe</div>
              <div className="email">Johndoe@email.com</div>
            </Link>
          </Link>
        </div>
      </div>
    );
  }
}
