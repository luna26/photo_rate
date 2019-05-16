import React, { Component } from "react";

export default class ProfileImage extends Component {
  returnImage = url => {
    if (url !== undefined) {
      return <img src={url} alt="" />;
    } else {
      return (
        <div className="lds-ripple">
          <div />
          <div />
        </div>
      );
    }
  };

  render() {
    return (
      <div className="profile-image-container">
        {this.returnImage(this.props.url)}
      </div>
    );
  }
}
