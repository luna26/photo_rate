import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

//collections
import { Images } from "../../../api/collections/images";

//names
export default class AddPhoto extends Component {
  constructor(props){
    super(props);

    this.state = {
      scrollAnimationActive:false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onSubmit = e => {
    e.preventDefault();

    if (this.refs.photoInput.files[0]) {
      const file = this.refs.photoInput.files[0];
      const photoName = this.refs.photoName.value;

      Images.insert({
        file: file,
        meta: {
          photoName
        },

        onStart() {},

        onUploaded(error) {
          if (error) {
            console.log("Error during upload: " + error);
          } else {
            console.log("success " + error);
          }
        },
        streams: "dynamic",
        chunkSize: "dynamic"
      });
    }
  };

  render() {
    return (
      <div className='add-photo-container' ref='addPhoto'>
        <h1>Add Photo</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Photo name" ref="photoName" />
          <input type="file" ref="photoInput" />
          <button>Add Photo</button>
        </form>
      </div>
    );
  }
}
