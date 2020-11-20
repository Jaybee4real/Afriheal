import React, { Component } from "react";

export default class DashboardNav extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="dashboard-nav">
        <i id="mobile-nav-toggle" className="fal fa-bars"></i>
        <div className="search-container">
          <div className="input-container">
            <i class="fal fa-search"></i>
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
