import React, { Component } from "react";
import PrivateHeader from '../privateHeader/PrivateHeader';

export default function withHeader(Component, private, title) {
  return class WithHover extends Component {
    render() {
      return (
        <div className='main-container'>
          <PrivateHeader title={title}/>
          <Component />
        </div>
      );
    }
  };
}
