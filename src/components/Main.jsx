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
        {/* //////////////Section Two//////// */}

        <div className="section-two section">
          <div className="left-side image"></div>
          <div className="right-side text">
            <div className="section-heading">
              <span>Get in touch</span> <br />
              with the best doctors!
            </div>
            <p className="subheading">
              Book appointments with many of our MCAN verified doctors online
            </p>
            <div className="btn-reverse">BOOK AN APPOINTMENT</div>
          </div>
        </div>

        {/* //////////////Section Three//////// */}

        <div className="section-three section">
          <div className="text left-side">
            <div className="section-heading">
              <span>Apply as a</span>
              <br />
              doctor.
            </div>
            <div className="subheading">
              Join our community of doctors and increase your reach as a
              specialist
            </div>
            <div className="btn-reverse">APPLY</div>
          </div>
          <div className="image right-side"></div>
        </div>

        {/* //////////////Section Four//////// */}

        <div className="course-section section">
          <div className="content-wrapper">
            <div className="left-side">
              <div className="heading">
                Take our health literacy course for free and earn a certificate!
              </div>
              <p className="text">
                Strong health literacy enables people to develop the skills and
                confidence to make informed decisions about thier health and the
                health of thier families, to effectively navigate health care
                systems, and to advocate effectively to thier political leaders
                and policy makers. Take our 10 minutes video course to get
                informed better.
              </p>

              <div className="buttons">
                <div className="btn-white">
                  Go to course
                  <i className="fas fa-arrow-right"></i>
                </div>
                <div className="btn-reverse">
                  Learn more
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="right-side"></div>
          </div>
        </div>
      </div>
    );
  }
}
