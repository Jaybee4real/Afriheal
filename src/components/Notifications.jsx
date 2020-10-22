import React, { Component } from "react";
import MessagePreview from "./MessagePreview";

export default class Notifications extends Component {
  render() {
    return (
      <div className="notifications-container">
        <div className="notification-section">
          <div className="title">
            Notifications
            <div className="option">See all</div>
          </div>
          <div className="notification-item important">
            <div className="notification-title">
              Complete Your User Profile
              <i className="fa fa-chevron-right"></i>
            </div>
          </div>

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
        </div>
        <div className="notification-section">
          <div className="title">Messages</div>
          <MessagePreview count={1} />
          <MessagePreview />
          <MessagePreview />
        </div>
      </div>
    );
  }
}
