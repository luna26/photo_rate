import React from 'react';
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Tracker } from "meteor/tracker";

import App from '../imports/ui/App';
import { onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-config';

Tracker.autorun(() => {
  const isAutheticated = !!Meteor.userId();
  onAuthChange(isAutheticated);
});

Meteor.startup(() => {
  render(<App />, document.getElementById("react-target"));
});