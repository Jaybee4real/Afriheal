import React, { Component } from "react";

export default class Community extends Component {
  render() {
    return (
      <div className={`${this.props.active === true ? "slide-in" : ""}`}>
        
        <div className="screen-title">
          <i className="far fa-globe-africa"></i>
          Community
        </div>
      </div>
    );
  }
}
