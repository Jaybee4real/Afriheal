import React, { Component } from "react";

export default class BookAppointment extends Component {
  render() {
    return (
      <div
        className={`page-wrapper ${
          this.props.active === true ? "slide-in" : ""
        }`}
      >
        <div className="screen-title">
          <i className="far fa-calendar-day"></i>
          Appointments
        </div>
      </div>
    );
  }
}
