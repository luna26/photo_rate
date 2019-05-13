import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

export default class PrivateHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="header-container">
        <div className="container-1">
          <p>{title}</p>
        </div>
        <div className="container-2">
          <button onClick={() => Accounts.logout()}>Log Out!</button>
        </div>
      </div>
    );
  }
}
