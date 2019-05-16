import React, { Component } from 'react';

export default class ButtonIcon extends Component {
  render(){
    const {clickIcon, icon} = this.props;

    return(
      <i className='material-icons icon-button' onClick={clickIcon}>{icon}</i>
    );
  }
}