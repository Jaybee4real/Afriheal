import React, { Component } from "react";
import "../../styles/appointments.scss";

export default class Appointments extends Component {
  render() {
    return (
      <div
        className={`dashboard-screen-wrapper ${
          this.props.active === true ? "slide-in" : ""
        }`}
      >
        <div className="info-container">
          <div className="left-side">
            <div className="heading">
              Get In Touch
              <br />
              With The Best Doctors Online
            </div>
            <div className="button btn-white">Book An Appointment</div>
          </div>
          <div className="right-side"></div>
        </div>

        <div className="content-wrapper">
          <div className="appointments-history-section">
            <div className="heading-container">
              <div className="heading">Appointment History</div>
              <div className="date-selector">
                <i className="fa fa-chevron-left"></i>
                <div className="present-date">June 23 - July 23</div>
                <i className="fa fa-chevron-right active"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
