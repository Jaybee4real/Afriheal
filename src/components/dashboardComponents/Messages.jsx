import React, { Component } from "react";

export default class Messages extends Component {
  render() {
    return (
      <div className={`${this.props.active === true ? "slide-in" : ""}`}>
        <div className="screen-title">
          <i className="fad fa-comments-alt"></i>
          Messages
        </div>
        This Is The Messages Screen
      </div>
    );
  }
}
