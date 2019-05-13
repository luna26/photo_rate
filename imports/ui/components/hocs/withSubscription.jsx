import React, { Component } from "react";
import { parse } from "querystring";

export default function withSubscription(
  ComponentToSub,
  subscriptionsArray,
  collections
) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        subscriptions: {},
        data: {}
      };
    }

    componentDidMount() {
      this.infoTracker = Tracker.autorun(() => {
        let temObj = {};
        let subName = "";
        let data = {};
        let item;
        let collectionName

        for (let index = 0; index < subscriptionsArray.length; index++) {
          subName = subscriptionsArray[index];
          temObj[subName] = Meteor.subscribe(subName);
        }

        for (let index = 0; index < collections.length; index++) {
          item = collections[index];
          collectionName = item.collectionName ? item.collectionName : item._name;
          data[collectionName] = collections[index].find().fetch();
        }

        this.setState({
          subscriptions: temObj,
          data: data
        });
      });
    }

    componentWillUnmount() {
      this.infoTracker.stop();
    }

    render() {
      return <ComponentToSub subscriptions={this.state.subscriptions} data={this.state.data} props={this.props} />;
    }
  };
}
