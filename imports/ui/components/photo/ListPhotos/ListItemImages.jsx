import React, { Component } from "react";
import RatePhoto from "../RatePhoto";
import ListUserRates from './ListUserRates';

export default class ListItemImages extends Component {
  constructor(props){
    super(props);

    this.state = {
      showInfoImage: false
    }
  }

  checkUserRate = ratings => {
    for (let index = 0; index < ratings.length; index++) {
      if (ratings[index].owner === Meteor.userId()) return false;
    }

    return true;
  };

  showInfoImage = () => {
    this.setState({
      showInfoImage: this.state.showInfoImage ? false : true
    });
  }

  render() {
    const { images } = this.props;
    const { ratings, pictureUrl, nameOwner, _id, extensionWithDot } = images;

    return (
      <div className="photo-item-container">
        <div className="photo-title-container">
          <div className='rate-container-user'>
            <img src={pictureUrl} alt=""/>
            <p>{nameOwner}</p>
          </div>
          <div className='rate-container-all'>
            <i className="material-icons no-rate" >stars</i>
            <p>{ratings.length}</p>
          </div>
        </div>
        <div className="photo-img-container">
          <img src={_id + extensionWithDot} alt="" />
          <div className={`container-users-rate ${this.state.showInfoImage ? '' : 'hide'}`}>
            <ListUserRates listRatings={ratings} />
          </div>
        </div>
        <div className="photo-rate-info">
          <RatePhoto imageId={_id} userRate={this.checkUserRate(ratings)} />
        </div>
        <i className='material-icons info-icon' onClick={this.showInfoImage}>info</i>
      </div>
    );
  }
}
