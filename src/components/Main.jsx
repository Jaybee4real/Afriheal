import React, { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="section-one section">
          <div className="question">What Is It?</div>
          <div className="section-heading">
            <span>Our</span> Product
          </div>

          <div className="row-container">
            <div className="row">
              <div className="image"></div>
              <div className="text">
                <div className="heading">
                  A cheaper and faster way to connect with health experts
                </div>
                <div className="card-body">
                  The online consultation platform allows you connect with
                  doctors and other health specialists from anywhere in the
                  world.
                </div>
              </div>
            </div>
            {/* ///////////// */}

            <div className="row">
              <div className="image"></div>
              <div className="text">
                <div className="heading">
                  A one stop shop for all your health information
                </div>
                <div className="card-body">
                  Got a medical question? Our versatile teams aims to provide
                  verified and yet relevant information about a variety of
                  health topics
                  <br />
                  Read articles and trending topics in the health space
                </div>
              </div>
            </div>

            {/* ////////////// */}

            <div className="row">
              <div className="image"></div>
              <div className="text">
                <div className="heading">Share, Connect, Repeat</div>
                <div className="card-body">
                  With our peer-to-peer healthcare initiative, you can connect
                  with other users with similar ailments. Doctors can also
                  answer your questions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
