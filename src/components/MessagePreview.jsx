import React, { Component } from "react";

export default class MessagePreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRead: false,
    };
  }

  render() {
    return (
      <div className="message-container">
        <div className="image">
          <i class="fad fa-user-circle"></i>
        </div>
        <div className="text">
          <p className="sender-name">Dr Mercy Conrad</p>
          <p className="preview">Your Appointment Has Been..</p>
        </div>
        <div className="right-side">
          <p className="time">9:15pm</p>
          <p className={this.props.count ? "message-count" : "hidden"}>
            {this.props.count}
          </p>
        </div>
      </div>
    );
  }
}
