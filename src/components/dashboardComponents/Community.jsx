import React, { Component } from "react";

export default class Community extends Component {
  render() {
    return (
      <div
        className={`${
          this.props.active === true ? "slide-in" : ""
        }`}
      >
        This Is The Community Screen
      </div>
    );
  }
}
