import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

//components
import ProfileImage from "./ProfileImage";
import ButtonIcon from "../common/ButtonIcon";

export default class PrivateHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginType: null,
      facebookData: []
    };
  }

  componentDidMount() {
    this.dataTracker = Tracker.autorun(() => {
      Meteor.subscribe("getUserData");

      let user = Meteor.user();

      if (user && user.services) {
        if (user.services.facebook) {
          this.setState({
            loginType: "facebook",
            facebookData: user.services.facebook
          });
        } else if (user.services.password) {
          this.setState({
            loginType: "password"
          });
        }
      }
    });
  }

  componentWillUnmount() {
    this.dataTracker.stop();
  }

  logOut = () => {
    Accounts.logout();
  };

  getUrlImage = () => {
    if(this.state.loginType === 'facebook') return <ProfileImage url={this.state.facebookData.pictureUrl} />;
    if(this.state.loginType === 'password') return <ProfileImage url={''} />;
  }

  render() {
    const { title } = this.props;
    return (
      <div className="header-container">
        <div className="container-1">
          {this.getUrlImage()}
          <p>{title}</p>
        </div>
        <div className="container-2">
          <ButtonIcon clickIcon={this.logOut.bind(this)} icon="exit_to_app" />
        </div>
      </div>
    );
  }
}
