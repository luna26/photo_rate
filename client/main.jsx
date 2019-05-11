import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import { Tracker } from "meteor/tracker";
import { Session } from 'meteor/session';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-config';

Tracker.autorun(() => {
  const isAutheticated = !!Meteor.userId();
  onAuthChange(isAutheticated);
});

Meteor.startup(() => {
  render(routes, document.getElementById("react-target"));
});