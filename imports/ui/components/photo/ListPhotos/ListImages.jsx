import React, { Component } from "react";

//components
import Modal from "react-modal";
import ListItemImages from "./ListItemImages";
import AddPhoto from "../AddPhoto";

export default class ListImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      moveAddPhoto: false
    };
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = () => {
  //   let lastScrollY = window.scrollY;

  //   if (lastScrollY > 275 && !this.state.moveAddPhoto) {
  //     this.setState({
  //       moveAddPhoto: true
  //     });
  //   } else if (lastScrollY < 275 && this.state.moveAddPhoto) {
  //     this.setState({
  //       moveAddPhoto: false
  //     });
  //   }
  // };

  renderItem = images => {
    return images.map(function(images, index) {
      return <ListItemImages images={images} key={images._id} />;
    });
  };

  openModal = open => {
    this.setState({
      modalIsOpen: open
    });
  };

  render() {
    const { images } = this.props.data;

    if (images === undefined || images === []) return null;

    return (
      <div className="main-photos-container">
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={true}
        >
          <AddPhoto />
          <button onClick={this.openModal.bind(this, false)}>Close</button>
        </Modal>
        <div className="icon-add-photo-container">
          {/* <i
            className={`material-icons add-photo ${
              this.state.moveAddPhoto ? "add-photo-scroll" : ""
            }`}
            onClick={this.openModal.bind(this, true)}
          >
            add_a_photo
          </i> */}
          <i className="material-icons add-photo" onClick={this.openModal.bind(this, true)}>add_a_photo</i>
        </div>
        <div className="list-photos-container">
          {images !== undefined ? this.renderItem(images) : null}
        </div>
      </div>
    );
  }
}
