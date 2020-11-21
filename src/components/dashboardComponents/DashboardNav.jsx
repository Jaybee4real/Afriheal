import React, { Component } from "react";

export default class DashboardNav extends Component {
  render() {
    return (
      <div className="dashboard-nav">
        <i
          id="mobile-nav-toggle"
          onClick={() => this.props.toggleSidebar()}
          className={this.props.sidebarOpen ? "fal fa-times" : "fal fa-bars"}
        ></i>
        <div className="search-container">
          <div className="input-container">
            <i className="fal fa-search"></i>
            <input className="nav-search" placeholder="Search 'Ebola' " />
          </div>
        </div>
        <div className="right-side">
          <div
            onClick={() => this.props.toggleNotification()}
            className="notifications-icon"
          >
            <i className="fal fa-bell"></i>
          </div>
          <div className="logout">
            <i className="far fa-sign-out"></i>
            <span className="text">Logout</span>
          </div>
        </div>
      </div>
    );
  }
}
