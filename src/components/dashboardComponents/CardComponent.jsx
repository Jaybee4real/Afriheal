import React, { Component } from "react";

export default class CardComponent extends Component {
  render() {
    return (
      <div className="card-item">
        {this.props.heading ? (
          <div className="card-title">
            {this.props.heading}
            {this.props.hasIcon ? <i className="fa fa-chevron-right"></i> : ""}
          </div>
        ) : (
          ""
        )}
        {this.props.linePosition === "top" ? <hr /> : ""}
        <div className="card-body">
          <p>{this.props.preInfo}</p>
          <div className="detail">
            <div className="image">
              <i className="fad fa-user-circle"></i>
            </div>
            <div className="text">
              <p className="name">Dr. Mercy Conrad</p>
              <p className="org">LUTH</p>
            </div>
          </div>
          {this.props.linePosition === "bottom" ? <hr /> : ""}
          <div className="link">{this.props.linkText}</div>
        </div>
      </div>
    );
  }
}
