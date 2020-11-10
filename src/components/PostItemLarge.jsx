import React, { Component } from "react";

export default class PostItemLarge extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="post-item-large-container">
        <img
          className="feature-image"
          src={this.props.featureImage}
          alt=""
        ></img>
        <div className="article-body">
          <div className="details">
            <div className="post-topic purple">Coronavirus</div>
            <div className="info">5 min read · Jun 2020</div>
          </div>
          <div className="title">The Race For A Vaccine</div>
          <div className="article-text-preview">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            commodi officia aspernatur.lorem pixel
          </div>
        </div>
        <div className="author-info">
          <div className="writer">
            <div className="image">
              <i class="fad fa-user-circle"></i>
            </div>
            <div className="text">
              <p className="name">Dr. Mercy Conrad</p>
              <p className="org">LUTH</p>
            </div>
          </div>
          <i class="fal fa-bookmark"></i>
        </div>
      </div>
    );
  }
}
