import React, { Component } from "react";
import { Meteor } from 'meteor/meteor';
import { Tracker } from "meteor/tracker";

//collections
import { Links } from "../../api/collections/links";

//names 
import { PUB_LINKS } from '../../api/names';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: []
    };
  }

  componentDidMount() {
    this.linkTracker = Tracker.autorun(() => {
      Meteor.subscribe(PUB_LINKS);
      const links = Links.find().fetch();
      this.setState({ links });
    });
  }

  componentWillUnmount() {
    this.linkTracker.stop();
  }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <p>Home!!</p>
      </div>
    );
  }
}
