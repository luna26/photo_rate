import React, { Component } from "react";

export default class ListUserRates extends Component {
  renderRatingInfo = (listRatings) => {
    if (listRatings.length > 0) {
      return listRatings.map(function(rateInfo, index) {
        return (
          <div key={rateInfo.owner} className="users-rate-item">
            <img src={rateInfo.pictureUrl} alt="" />
            <p>{rateInfo.name}</p>
          </div>
        );
      })
    } else {
      return(
        <div>
          0 Rates
        </div>
      );
    }
  };

  render() {
    const { listRatings } = this.props;

    console.log("listRatings", listRatings);

    return (
      <div className="users-rate-list">
        {this.renderRatingInfo(listRatings)}
      </div>
    );
  }
}
