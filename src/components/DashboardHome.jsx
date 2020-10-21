import React, { Component } from "react";

export default class DashboardHome extends Component {
  render() {
    return (
      <div className="home-wrapper notification-bar-active">
        <div className="welcome">
          <div className="left-side">
            <div className="heading">Welcome Ava,</div>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste at
              qui eveniet a nisi, laboriosam deleniti, nesciunt quo corrupti
              molestiae ipsum nam. A alias minus quae accusantium laboriosam?
              Id, delectus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Perspiciatis, eligendi!
            </p>
            <div className="button-container">
              <div className="btn-white">Upgrade</div>
              <div className="btn">Learn More</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
