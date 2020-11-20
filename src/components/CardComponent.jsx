import React, { Component } from "react";

export default class CardComponent extends Component {
  render() {
    return (
      <div className="notification-item">
        <div className="notification-title">
          Reminder
          <i className="fa fa-chevron-right"></i>
        </div>
        <hr />
        <div className="notification-body">
          <p>Your Appointment was approved by</p>
          <div className="detail">
            <div className="image">
              <i class="fad fa-user-circle"></i>
            </div>
            <div className="text">
              <p className="name">Dr. Mercy Conrad</p>
              <p className="org">LUTH</p>
            </div>
          </div>
          <div className="download">Download iCal</div>
        </div>
      </div>
    );
  }
}
