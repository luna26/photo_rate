import React, { Component } from "react";

//components
import ListImages from "../photo/ListPhotos/ListImages";

//hocs
import withSubscription from "../hocs/withSubscription";

//names
import { PUB_FILES_IMAGES_ALL } from "../../../api/names";

//collections
import { Images } from "../../../api/collections/images";

export default class Home extends Component {
  render() {
    const ListPhotoWithSubscription = withSubscription(
      ListImages,
      [PUB_FILES_IMAGES_ALL],
      [Images]
    );

    return (
      <div className="home-container">
        <ListPhotoWithSubscription />
      </div>
    );
  }
}
