import React, { Component } from "react";
import MessagePreview from "../MessagePreview";
import CardComponent from "../CardComponent";

export default class Notifications extends Component {
 
  render() {
    return (
      <div className="notifications-container">
        <i class="fal fa-times"></i>
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

      <CardComponent />
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
