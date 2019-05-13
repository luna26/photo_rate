import React, { Component } from "react";
import RatePhoto from '../RatePhoto';

export default class ListItemImages extends Component {
  render(){
    const {images} = this.props;
    const {meta, _id, extensionWithDot} = images;

    return(
      <div className='photo-item-container'>
        <div className='photo-title-container'>
          <h1>{meta.photoName}</h1>
        </div>
        <div className='photo-img-container'>
          <img src={_id+extensionWithDot} alt=""/>
        </div>
        <div>
          <RatePhoto />
        </div>
      </div>
    );
  }
}