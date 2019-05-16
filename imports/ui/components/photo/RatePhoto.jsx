import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

//names
import { PHOTO_ADD_RATE, PHOTO_REMOVE_RATE } from "../../../api/names";

export default class RatePhoto extends Component {
  rate = (imageId, userRate) => {
    if(userRate) return Meteor.call(PHOTO_ADD_RATE, imageId);
    Meteor.call(PHOTO_REMOVE_RATE, imageId);
  };
 
  renderRateIcon = (userRate, imageId) => {
    return (
      <i
        onClick={this.rate.bind(this, imageId, userRate)}
        className={`material-icons ${userRate ? 'no-rate' : 'rate'}`}
      >
        stars
      </i>
    );
  };

  render() {
    const { imageId, userRate } = this.props;
    return (
      <div>
        <div>
          {this.renderRateIcon(userRate, imageId)}
        </div>
      </div>
    );
  }
}
