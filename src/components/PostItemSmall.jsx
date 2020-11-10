import React, { Component } from "react";

export default class PostItemSmall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="post-item-small-container">
        <img src={this.props.featureImage} alt="" />
        <div className="article-body">
          <div className="details">
            <div className="post-topic purple">Coronavirus</div>
            <div className="info">5 min read · Jun 2020</div>
          </div>
          <div className="title">{this.props.title}</div>
          <div className="article-text-preview">
            {this.props.articleText
              ? this.props.articleText
              : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consequuntu"}
          </div>
        </div>
      </div>
    );
  }
}
