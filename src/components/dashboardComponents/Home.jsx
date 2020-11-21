import React, { Component } from "react";
import PostItemLarge from "../PostItemLarge";
import PostItemSmall from "../PostItemSmall";

export default class DashboardHome extends Component {
  render() {
    return (
      <div
        className={`home-wrapper ${this.props.active === true ? "slide-in" : ""}`}
      >
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
          <div className="right-side">
            <i className="fal fa-times"></i>
          </div>
        </div>
        <div className="content">
          <div className="row">
            <PostItemLarge featureImage={require("../../img/vaccine.jpeg")} />
            <div className="inner">
              <PostItemSmall
                featureImage={require("../../img/eye.png")}
                title={"Mental Health : Cancer 2.0"}
                topic={"Mental Health"}
              />
              <PostItemSmall
                featureImage={require("../../img/malaria.jpg")}
                title={"The Fight Against Malaria"}
                topic={"Health"}
              />
            </div>
          </div>
          {/* /////////////////////////////?? */}
          <div className="row">
            <PostItemLarge featureImage={require("../../img/vaccine.png")} />
            <div className="inner">
              <PostItemSmall
                featureImage={require("../../img/doctor.jpg")}
                title={"Mental Health : Cancer 2.0"}
                topic={"Mental Health"}
              />
              <PostItemSmall
                featureImage={require("../../img/eye.png")}
                title={"The Fight Against Malaria"}
                topic={"Health"}
              />
            </div>
          </div>
          {/* /////////////////////////////?? */}
          <div className="row">
            <PostItemLarge
              featureImage={require("../../img/article_header.jpeg")}
            />
            <div className="inner">
              <PostItemSmall
                featureImage={require("../../img/malaria.jpg")}
                title={"Mental Health : Cancer 2.0"}
                topic={"Mental Health"}
              />
              <PostItemSmall
                featureImage={require("../../img/eye.png")}
                title={"The Fight Against Malaria"}
                topic={"Health"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
