import React, { Component } from "react";
import MessagePreview from "./MessagePreview";
import CardComponent from "./CardComponent";

export default class Notifications extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="notifications-container">
        <i
          onClick={() => this.props.toggleNotification()}
          className={`fal fa-times ${
            this.props.notificationSidebarOpen ? "active" : ""
          }`}
        ></i>
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

          <CardComponent
            linePosition="top"
            heading="Reminder"
            preInfo="Your appointment has been aproved by"
            linkText="Download iCal"
            hasIcon
          />
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
