import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

//names
import { PHOTO_ADD_RATE, PHOTO_REMOVE_RATE } from "../../../api/names";

export default class RatePhoto extends Component {
  rateAdd = () => {
    Meteor.call(PHOTO_ADD_RATE, "S4vYnlwVH");
  };

  rateRemove = () => {
    Meteor.call(PHOTO_REMOVE_RATE, "S4vYnlwVH");
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.rateAdd}>Rate +1</button>
          <button onClick={this.rateRemove}>Rate -1</button>
          <button onClick={this.rateRemove}>Report</button>
        </div>
      </div>
    );
  }
}
