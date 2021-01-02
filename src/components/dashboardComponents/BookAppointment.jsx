import React, { Component } from "react";

export default class BookAppointment extends Component {
  render() {
    return (
      <div
        className={`page-wrapper ${
          this.props.active === true ? "slide-in" : ""
        }`}
      >
        <div className="">
          <h3>Book Appointment Screen</h3>
        </div>
      </div>
    );
  }
}
