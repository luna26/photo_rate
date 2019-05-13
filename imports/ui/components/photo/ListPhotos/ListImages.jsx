import React, { Component } from "react";

//components
import ListItemImages from "./ListItemImages";
import AddPhoto from "../../photo/AddPhoto";

export default class ListImages extends Component {
  renderItem = images => {
    return images.map(function(images, index) {
      return <ListItemImages images={images} key={images._id} />;
    });
  };

  render() {
    const { images } = this.props.data;

    if (images === undefined || images === []) return null;

    return (
      <div className="main-photos-container">
        <div className="list-photos-container">
          <div className="header-expanded-block" />
          <AddPhoto />
          {images !== undefined ? this.renderItem(images) : null}
        </div>
      </div>
    );
  }
}
